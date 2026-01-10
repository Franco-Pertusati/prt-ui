import { Injectable } from '@angular/core';

export interface Product {
  id: number,
  price: number,
  name: string
  category: Category
}

export interface Category {
  id: number,
  name: string
}

export interface Check {
  id: number,
  name: string,
  Products: Product[]
}

export interface Step {
  id: number,
  name: string,
  color: string,
}

export interface DinningTable {
  id: number,
  step: Step,
  name: string,
  checks: Check[]
}

@Injectable({
  providedIn: 'root'
})
export class SalonService {
  private dinningTables: DinningTable[] = [];
  private products: Product[] = [];
  private categories: Category[] = [];
  private steps: Step[] = [];

  constructor() {
    this.initializeData();
  }

  private initializeData(): void {
    // Categorías
    this.categories = [
      { id: 1, name: 'Entradas' },
      { id: 2, name: 'Pastas' },
      { id: 3, name: 'Pizzas' },
      { id: 4, name: 'Carnes' },
      { id: 5, name: 'Postres' },
      { id: 6, name: 'Bebidas' }
    ];

    // Productos de restaurante italiano
    this.products = [
      { id: 1, name: 'Bruschetta', price: 8.50, category: this.categories[0] },
      { id: 2, name: 'Carpaccio', price: 12.00, category: this.categories[0] },
      { id: 3, name: 'Caprese', price: 9.50, category: this.categories[0] },
      { id: 4, name: 'Arancini', price: 10.00, category: this.categories[0] },
      
      { id: 5, name: 'Spaghetti Carbonara', price: 14.50, category: this.categories[1] },
      { id: 6, name: 'Fettuccine Alfredo', price: 13.00, category: this.categories[1] },
      { id: 7, name: 'Lasagna', price: 15.50, category: this.categories[1] },
      { id: 8, name: 'Ravioli', price: 16.00, category: this.categories[1] },
      
      { id: 9, name: 'Pizza Margherita', price: 12.00, category: this.categories[2] },
      { id: 10, name: 'Pizza Quattro Formaggi', price: 14.50, category: this.categories[2] },
      { id: 11, name: 'Pizza Pepperoni', price: 13.50, category: this.categories[2] },
      { id: 12, name: 'Pizza Prosciutto', price: 15.00, category: this.categories[2] },
      
      { id: 13, name: 'Ossobuco', price: 22.00, category: this.categories[3] },
      { id: 14, name: 'Saltimbocca', price: 20.00, category: this.categories[3] },
      { id: 15, name: 'Bistecca Fiorentina', price: 28.00, category: this.categories[3] },
      
      { id: 16, name: 'Tiramisu', price: 7.50, category: this.categories[4] },
      { id: 17, name: 'Panna Cotta', price: 6.50, category: this.categories[4] },
      { id: 18, name: 'Cannoli', price: 7.00, category: this.categories[4] },
      { id: 19, name: 'Gelato', price: 5.50, category: this.categories[4] },
      
      { id: 20, name: 'Agua Mineral', price: 2.50, category: this.categories[5] },
      { id: 21, name: 'Vino Tinto', price: 18.00, category: this.categories[5] },
      { id: 22, name: 'Vino Blanco', price: 16.00, category: this.categories[5] },
      { id: 23, name: 'Espresso', price: 3.00, category: this.categories[5] }
    ];

    // Steps
    this.steps = [
      { id: 1, name: 'Sin pedido', color: '#9CA3AF' },
      { id: 2, name: 'Entrada', color: '#F59E0B' },
      { id: 3, name: 'Plato principal', color: '#EF4444' },
      { id: 4, name: 'Postres', color: '#EC4899' },
      { id: 5, name: 'Esperando cuenta', color: '#8B5CF6' },
      { id: 6, name: 'Cuenta pagada', color: '#10B981' }
    ];

    // 30 tables con datos variados
    this.dinningTables = [
      {
        id: 1,
        name: '1',
        step: this.steps[2],
        checks: [
          {
            id: 1,
            name: 'Cuenta 1',
            Products: [
              this.products[0],
              this.products[4],
              this.products[20]
            ]
          }
        ]
      },
      {
        id: 2,
        name: '2',
        step: this.steps[0],
        checks: [
          {
            id: 2,
            name: 'Cuenta 1',
            Products: []
          }
        ]
      },
      {
        id: 3,
        name: '3',
        step: this.steps[3],
        checks: [
          {
            id: 3,
            name: 'Cuenta 1',
            Products: [
              this.products[1],
              this.products[8],
              this.products[15]
            ]
          }
        ]
      },
      {
        id: 4,
        name: '4',
        step: this.steps[4],
        checks: [
          {
            id: 4,
            name: 'Cuenta 1',
            Products: [
              this.products[2],
              this.products[6],
              this.products[16],
              this.products[19]
            ]
          }
        ]
      },
      {
        id: 5,
        name: '5',
        step: this.steps[1],
        checks: [
          {
            id: 5,
            name: 'Cuenta 1',
            Products: [
              this.products[3]
            ]
          }
        ]
      },
      {
        id: 6,
        name: '6',
        step: this.steps[2],
        checks: [
          {
            id: 6,
            name: 'Cuenta 1',
            Products: [
              this.products[0],
              this.products[9],
              this.products[21]
            ]
          }
        ]
      },
      {
        id: 7,
        name: '7',
        step: this.steps[5],
        checks: [
          {
            id: 7,
            name: 'Cuenta 1',
            Products: []
          }
        ]
      },
      {
        id: 8,
        name: '8',
        step: this.steps[2],
        checks: [
          {
            id: 8,
            name: 'Cuenta 1',
            Products: [
              this.products[1],
              this.products[5],
              this.products[22]
            ]
          }
        ]
      },
      {
        id: 9,
        name: '9',
        step: this.steps[1],
        checks: [
          {
            id: 9,
            name: 'Cuenta 1',
            Products: [
              this.products[2],
              this.products[20]
            ]
          }
        ]
      },
      {
        id: 10,
        name: '10',
        step: this.steps[3],
        checks: [
          {
            id: 10,
            name: 'Cuenta 1',
            Products: [
              this.products[3],
              this.products[10],
              this.products[17],
              this.products[22]
            ]
          }
        ]
      },
      {
        id: 11,
        name: '11',
        step: this.steps[0],
        checks: [
          {
            id: 11,
            name: 'Cuenta 1',
            Products: []
          }
        ]
      },
      {
        id: 12,
        name: '12',
        step: this.steps[2],
        checks: [
          {
            id: 12,
            name: 'Cuenta 1',
            Products: [
              this.products[0],
              this.products[13],
              this.products[21]
            ]
          }
        ]
      },
      {
        id: 13,
        name: '13',
        step: this.steps[4],
        checks: [
          {
            id: 13,
            name: 'Cuenta 1',
            Products: [
              this.products[1],
              this.products[7],
              this.products[16],
              this.products[20]
            ]
          }
        ]
      },
      {
        id: 14,
        name: '14',
        step: this.steps[1],
        checks: [
          {
            id: 14,
            name: 'Cuenta 1',
            Products: [
              this.products[3],
              this.products[19]
            ]
          }
        ]
      },
      {
        id: 15,
        name: '15',
        step: this.steps[2],
        checks: [
          {
            id: 15,
            name: 'Cuenta 1',
            Products: [
              this.products[2],
              this.products[11],
              this.products[22]
            ]
          }
        ]
      },
      {
        id: 16,
        name: '16',
        step: this.steps[3],
        checks: [
          {
            id: 16,
            name: 'Cuenta 1',
            Products: [
              this.products[0],
              this.products[5],
              this.products[18]
            ]
          }
        ]
      },
      {
        id: 17,
        name: '17',
        step: this.steps[0],
        checks: [
          {
            id: 17,
            name: 'Cuenta 1',
            Products: []
          }
        ]
      },
      {
        id: 18,
        name: '18',
        step: this.steps[2],
        checks: [
          {
            id: 18,
            name: 'Cuenta 1',
            Products: [
              this.products[1],
              this.products[14],
              this.products[20],
              this.products[21]
            ]
          }
        ]
      },
      {
        id: 19,
        name: '19',
        step: this.steps[4],
        checks: [
          {
            id: 19,
            name: 'Cuenta 1',
            Products: [
              this.products[3],
              this.products[6],
              this.products[15],
              this.products[22]
            ]
          }
        ]
      },
      {
        id: 20,
        name: '20',
        step: this.steps[1],
        checks: [
          {
            id: 20,
            name: 'Cuenta 1',
            Products: [
              this.products[0],
              this.products[19]
            ]
          }
        ]
      },
      {
        id: 21,
        name: '21',
        step: this.steps[2],
        checks: [
          {
            id: 21,
            name: 'Cuenta 1',
            Products: [
              this.products[2],
              this.products[8],
              this.products[20]
            ]
          }
        ]
      },
      {
        id: 22,
        name: '22',
        step: this.steps[5],
        checks: [
          {
            id: 22,
            name: 'Cuenta 1',
            Products: []
          }
        ]
      },
      {
        id: 23,
        name: '23',
        step: this.steps[3],
        checks: [
          {
            id: 23,
            name: 'Cuenta 1',
            Products: [
              this.products[1],
              this.products[10],
              this.products[16],
              this.products[21]
            ]
          }
        ]
      },
      {
        id: 24,
        name: '24',
        step: this.steps[0],
        checks: [
          {
            id: 24,
            name: 'Cuenta 1',
            Products: []
          }
        ]
      },
      {
        id: 25,
        name: '25',
        step: this.steps[2],
        checks: [
          {
            id: 25,
            name: 'Cuenta 1',
            Products: [
              this.products[3],
              this.products[4],
              this.products[22]
            ]
          }
        ]
      },
      {
        id: 26,
        name: '26',
        step: this.steps[1],
        checks: [
          {
            id: 26,
            name: 'Cuenta 1',
            Products: [
              this.products[0],
              this.products[20]
            ]
          }
        ]
      },
      {
        id: 27,
        name: '27',
        step: this.steps[4],
        checks: [
          {
            id: 27,
            name: 'Cuenta 1',
            Products: [
              this.products[2],
              this.products[9],
              this.products[17],
              this.products[19]
            ]
          }
        ]
      },
      {
        id: 28,
        name: '28',
        step: this.steps[2],
        checks: [
          {
            id: 28,
            name: 'Cuenta 1',
            Products: [
              this.products[1],
              this.products[12],
              this.products[21]
            ]
          }
        ]
      },
      {
        id: 29,
        name: '29',
        step: this.steps[3],
        checks: [
          {
            id: 29,
            name: 'Cuenta 1',
            Products: [
              this.products[3],
              this.products[7],
              this.products[18]
            ]
          }
        ]
      },
      {
        id: 30,
        name: '30',
        step: this.steps[0],
        checks: [
          {
            id: 30,
            name: 'Cuenta 1',
            Products: []
          }
        ]
      }
    ];
  }

  // Métodos públicos para acceder a los datos
  gettables(): DinningTable[] {
    return this.dinningTables;
  }

  gettableById(id: number): DinningTable | undefined {
    return this.dinningTables.find(m => m.id === id);
  }

  getProducts(): Product[] {
    return this.products;
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getSteps(): Step[] {
    return this.steps;
  }

  // Agregar producto a una cuenta
  addProductToCheck(tableId: number, checkId: number, product: Product): void {
    const table = this.dinningTables.find(t => t.id === tableId);
    if (table) {
      const check = table.checks.find(c => c.id === checkId);
      if (check) {
        check.Products.push(product);
        this.updateTableStep(tableId, product.category);
      }
    }
  }

  // Eliminar producto de una cuenta
  removeProductFromCheck(tableId: number, checkId: number, productIndex: number): void {
    const table = this.dinningTables.find(t => t.id === tableId);
    if (table) {
      const check = table.checks.find(c => c.id === checkId);
      if (check && productIndex >= 0 && productIndex < check.Products.length) {
        check.Products.splice(productIndex, 1);
        
        if (check.Products.length === 0) {
          table.step = this.steps[0];
        }
      }
    }
  }

  // Cobrar una table
  payTable(tableId: number): void {
    const table = this.dinningTables.find(t => t.id === tableId);
    if (table) {
      table.checks.forEach(check => {
        check.Products = [];
      });
      table.step = this.steps[5];
    }
  }

  // Calcular total de una cuenta
  calculateCheckTotal(check: Check): number {
    return check.Products.reduce((total, product) => total + product.price, 0);
  }

  // Calcular total de una table
  calculateTableTotal(tableId: number): number {
    const table = this.dinningTables.find(t => t.id === tableId);
    if (table) {
      return table.checks.reduce((total, check) => {
        return total + this.calculateCheckTotal(check);
      }, 0);
    }
    return 0;
  }

  // Cambiar step de según categoría del producto
  updateTableStep(tableId: number, category: Category): void {
    const table = this.dinningTables.find(t => t.id === tableId);
    if (table) {
      switch (category.name) {
        case 'Entradas':
          table.step = this.steps[1];
          break;
        case 'Pastas':
        case 'Pizzas':
        case 'Carnes':
          table.step = this.steps[2];
          break;
        case 'Postres':
          table.step = this.steps[3];
          break;
        case 'Bebidas':
          if (table.step.id === 1) {
            table.step = this.steps[1];
          }
          break;
      }
    }
  }

  // Cambiar step de a "Esperando cuenta"
  requestBill(tableId: number): void {
    const table = this.dinningTables.find(t => t.id === tableId);
    if (table) {
      table.step = this.steps[4];
    }
  }
}