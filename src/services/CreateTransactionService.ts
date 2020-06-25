import { getCustomRepository, getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';
import Category from '../models/Category';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const categoriesRepository = getRepository(Category);

    if (!value && value > 0) {
      throw new AppError('Transaction value is not valid');
    }

    let categoryObject = await categoriesRepository.findOne({
      where: { title: category },
    });

    if (!categoryObject) {
      categoryObject = categoriesRepository.create({
        title: category,
      });

      await categoriesRepository.save(categoryObject);
    }

    const transaction = transactionsRepository.create({
      title,
      value,
      type,
      category_id: categoryObject.id,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
