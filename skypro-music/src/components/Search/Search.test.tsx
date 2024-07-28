import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { Search } from './Search';
import { setFilters } from '@/store/features/playerSlice';

// Определите интерфейс для состояния вашего Redux store
interface RootState {
  player: {
    searchString: string;
  };
}

// Создаем mock store
const mockStore = configureStore<RootState>([]);

describe("Компонент Search", () => {
  let store: MockStoreEnhanced<RootState>;

  beforeEach(() => {
    store = mockStore({
      player: {
        searchString: '',
      },
    });
  });

  it("Должен рендериться корректно", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    // Проверка наличия элементов в DOM
    const input = screen.getByPlaceholderText('Поиск');
    expect(input).toBeTruthy(); // Проверка, что элемент существует в DOM
  });

  it("Должен обновлять состояние и диспетчеризовать действие при вводе текста", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Поиск') as HTMLInputElement;

    // Ввод текста в поле поиска
    fireEvent.change(input, { target: { value: 'test query' } });

    // Проверка, что значение input обновилось
    expect(input.value).toBe('test query');

    // Проверка, что действие было диспетчеризовано
    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: setFilters.type,
        payload: { searchString: 'test query' }
      }
    ]);
  });
});