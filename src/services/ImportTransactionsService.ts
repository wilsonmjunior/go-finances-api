import csvParse from 'csv-parse';
import fs from 'fs';

import { getCustomRepository, getRepository, In, Not } from 'typeorm';

import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';
import Category from '../models/Category';

interface CSVTransaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class ImportTransactionsService {
  public async execute(filePath: string): Promise<Transaction[]> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const categoriesRepository = getRepository(Category);

    const readCSV = fs.createReadStream(filePath);

    const parseStream = csvParse({
      from_line: 2,
      ltrim: true,
      rtrim: true,
    });

    const parseCSV = readCSV.pipe(parseStream);

    const transactions: CSVTransaction[] = [];
    const categories: string[] = [];

    parseCSV.on('data', async line => {
      const [title, type, value, category] = line;

      if (!title || !type || !value) return;

      categories.push(category);

      transactions.push({
        title,
        type,
        value,
        category,
      });
    });

    await new Promise(resolve => parseCSV.on('end', resolve));

    const existingCategories = await categoriesRepository.find({
      where: In(categories),
    });

    const existingCategoriesTitles = existingCategories.map(
      category => category.title,
    );

    const notExistingCategories = categories
      .filter(category => !existingCategoriesTitles.includes(category))
      .filter(
        (value, index, currentList) => currentList.indexOf(value) === index,
      );

    const addedCategories = categoriesRepository.create(
      notExistingCategories.map(title => ({
        title,
      })),
    );

    await categoriesRepository.save(addedCategories);

    const updatedCategories = [...existingCategories, ...addedCategories];

    const addedTransactions = transactionsRepository.create(
      transactions.map(transaction => ({
        title: transaction.title,
        type: transaction.type,
        value: transaction.value,
        category_id: updatedCategories.find(
          item => item.title === transaction.category,
        )?.id,
      })),
    );

    await transactionsRepository.save(addedTransactions);

    await fs.promises.unlink(filePath);

    return [];
  }
}

export default ImportTransactionsService;
