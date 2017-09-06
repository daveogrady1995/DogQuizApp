import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const questions = [
      { id: 1, name: 'What is the smallest dog breed?', options: ['Pug, Retreiver, Chihuahua'], answer: 'Chihuahua' },
      { id: 2, name: 'What is the most popular dog trick?', options: ['Sit, Paw, Jump'], answer: 'Sit' },
      { id: 3, name: 'Where does the Red Setter originate', options: ['Spain, Ireland, Canada'], answer: 'Ireland' }
    ];
    return {questions};
  }
}