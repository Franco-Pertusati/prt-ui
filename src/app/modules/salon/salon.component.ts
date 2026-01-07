import { Component } from '@angular/core';
import { ThemeToggleBtnComponent } from "../../prt-ui/theme-toggle-btn/theme-toggle-btn.component";

interface Product {
  id: number,
  price: number,
  name: string
  category: Category
}

interface Category {
  id: number,
  name: string
}

interface Check {
  id: number,
  name: string,
  Products: Product[]
}

interface Step {
  id: number,
  name: string,
  color: string,
}

interface DinningTable {
  id: number,
  step: Step,
  name: string,
  checks: Check[]
}

@Component({
  selector: 'app-salon',
  imports: [ThemeToggleBtnComponent],
  templateUrl: './salon.component.html'
})
export class SalonComponent {
  dinningTables: DinningTable[] = []
  products: Product[] = []
  categories: Category[] = []
  steps: Step[] = []

  constructor() {
    this.initializeData();
  }

  initializeData() {
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

    // Mesas con datos de prueba
    this.dinningTables = [
      {
        id: 1,
        name: 'Mesa 1',
        step: this.steps[2],
        checks: [
          {
            id: 1,
            name: 'Cuenta 1',
            Products: [
              this.products[0], // Bruschetta
              this.products[4], // Spaghetti Carbonara
              this.products[20] // Vino Tinto
            ]
          },
          {
            id: 22,
            name: 'Cuenta 1',
            Products: [
              this.products[0], // Bruschetta
              this.products[4], // Spaghetti Carbonara
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'Mesa 2',
        step: this.steps[0],
        checks: [
          {
            id: 2,
            name: 'Cuenta 1',
            Products: []
          },
        ]
      },
      {
        id: 3,
        name: 'Mesa 3',
        step: this.steps[3],
        checks: [
          {
            id: 3,
            name: 'Cuenta 1',
            Products: [
              this.products[1], // Carpaccio
              this.products[8], // Pizza Margherita
              this.products[15] // Tiramisu
            ]
          }
        ]
      },
      {
        id: 4,
        name: 'Mesa 4',
        step: this.steps[4],
        checks: [
          {
            id: 4,
            name: 'Cuenta 1',
            Products: [
              this.products[2], // Caprese
              this.products[6], // Lasagna
              this.products[16], // Panna Cotta
              this.products[19] // Agua Mineral
            ]
          }
        ]
      },
      {
        id: 5,
        name: 'Mesa 5',
        step: this.steps[1],
        checks: [
          {
            id: 5,
            name: 'Cuenta 1',
            Products: [
              this.products[3] // Arancini
            ]
          }
        ]
      }
    ];
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

        // Actualizar step si la cuenta quedó vacía
        if (check.Products.length === 0) {
          table.step = this.steps[0]; // Sin pedido
        }
      }
    }
  }

  // Cobrar una mesa (marca todas las cuentas como pagadas)
  payTable(tableId: number): void {
    const table = this.dinningTables.find(t => t.id === tableId);
    if (table) {
      // Limpiar todas las cuentas
      table.checks.forEach(check => {
        check.Products = [];
      });
      // Cambiar step a "Cuenta pagada"
      table.step = this.steps[5];
    }
  }

  // Calcular total de una cuenta
  calculateCheckTotal(check: Check): number {
    return check.Products.reduce((total, product) => total + product.price, 0);
  }

  // Calcular total de una mesa
  calculateTableTotal(tableId: number): number {
    const table = this.dinningTables.find(t => t.id === tableId);
    if (table) {
      return table.checks.reduce((total, check) => {
        return total + this.calculateCheckTotal(check);
      }, 0);
    }
    return 0;
  }

  // Cambiar step de mesa según categoría del producto
  updateTableStep(tableId: number, category: Category): void {
    const table = this.dinningTables.find(t => t.id === tableId);
    if (table) {
      switch (category.name) {
        case 'Entradas':
          table.step = this.steps[1]; // Entrada
          break;
        case 'Pastas':
        case 'Pizzas':
        case 'Carnes':
          table.step = this.steps[2]; // Plato principal
          break;
        case 'Postres':
          table.step = this.steps[3]; // Postres
          break;
        case 'Bebidas':
          // Las bebidas no cambian el step si ya hay uno más avanzado
          if (table.step.id === 1) {
            table.step = this.steps[1];
          }
          break;
      }
    }
  }

  // Cambiar step de mesa a "Esperando cuenta"
  requestBill(tableId: number): void {
    const table = this.dinningTables.find(t => t.id === tableId);
    if (table) {
      table.step = this.steps[4]; // Esperando cuenta
    }
  }
}