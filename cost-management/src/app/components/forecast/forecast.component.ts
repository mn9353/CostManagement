import { Component } from '@angular/core';

interface SubRow {
  label: string;
  values: (number | null)[];
}

interface ForecastRow {
  id: number;
  internalOrder: string;
  team: string;
  type: string;
  category: string;
  supplier: string;
  description: string;
  currency: string;
  subRows: SubRow[];
}

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  currentYear = 2026;

  filters = {
    internalOrder: '',
    type: '',
    account: '',
    team: '',
    category: '',
    spendType: '',
    supplier: '',
    currency: ''
  };

  forecastRows: ForecastRow[] = [
    {
      id: 1,
      internalOrder: 'IO-4001',
      team: 'Digital',
      type: 'OPEX',
      category: 'Software',
      supplier: 'Microsoft',
      description: 'Azure Cloud Services',
      currency: 'AUD',
      subRows: [
        { label: 'Forecast in Local Currency',  values: [4400,  5700,  8700,  7700,  8400,  7100,  11100, 10100, 9200,  8500,  7300,  6800] },
        { label: 'Forecast in Site Currency',   values: [4200,  5500,  8500,  7500,  8200,  6900,  10800, 9800,  9000,  8300,  7100,  6600] },
        { label: 'Other Sources',               values: [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null]  }
      ]
    },
    {
      id: 2,
      internalOrder: 'IO-4002',
      team: 'Operations',
      type: 'CAPEX',
      category: 'Infrastructure',
      supplier: 'AWS',
      description: 'Server Hardware Upgrade',
      currency: 'AUD',
      subRows: [
        { label: 'Forecast in Local Currency',  values: [12000, 12000, 12000, 15000, 15000, 15000, 18000, 18000, 18000, 20000, 20000, 20000] },
        { label: 'Forecast in Site Currency',   values: [11500, 11500, 11500, 14500, 14500, 14500, 17500, 17500, 17500, 19500, 19500, 19500] },
        { label: 'Other Sources',               values: [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null]  }
      ]
    },
    {
      id: 3,
      internalOrder: 'IO-4003',
      team: 'Finance',
      type: 'OPEX',
      category: 'Consulting',
      supplier: 'Deloitte',
      description: 'ERP Implementation Support',
      currency: 'AUD',
      subRows: [
        { label: 'Forecast in Local Currency',  values: [25000, 25000, 30000, 30000, 35000, 35000, 28000, 28000, 32000, 32000, 27000, 27000] },
        { label: 'Forecast in Site Currency',   values: [24000, 24000, 29000, 29000, 34000, 34000, 27000, 27000, 31000, 31000, 26000, 26000] },
        { label: 'Other Sources',               values: [5000,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  5000]  }
      ]
    },
    {
      id: 4,
      internalOrder: 'IO-4004',
      team: 'Projects',
      type: 'CAPEX',
      category: 'Services',
      supplier: 'Accenture',
      description: 'Entitlement Support',
      currency: 'AUD',
      subRows: [
        { label: 'Forecast in Local Currency',  values: [8000,  8000,  9500,  9500,  11000, 11000, 10000, 10000, 12000, 12000, 9000,  9000]  },
        { label: 'Forecast in Site Currency',   values: [7700,  7700,  9200,  9200,  10700, 10700, 9700,  9700,  11700, 11700, 8700,  8700]  },
        { label: 'Other Sources',               values: [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null]  }
      ]
    }
  ];

  getSubRowTotal(values: (number | null)[]): number {
    return values.reduce((s: number, v) => s + (v ?? 0), 0);
  }

  getColTotal(mi: number): number {
    return this.forecastRows.reduce((t, row) =>
      t + row.subRows.reduce((s, sub) => s + (sub.values[mi] ?? 0), 0), 0);
  }

  getGrandTotal(): number {
    return this.months.reduce((t, _, i) => t + this.getColTotal(i), 0);
  }

  roundToK(n: number): number {
    return Math.round(n / 1000) * 1000;
  }

  fmt(v: number | null): string {
    if (!v) return '';
    return v.toLocaleString();
  }

  addRow(): void {
    this.forecastRows.push({
      id: Date.now(),
      internalOrder: '',
      team: '',
      type: '',
      category: '',
      supplier: '',
      description: '',
      currency: 'AUD',
      subRows: [
        { label: 'Forecast in Local Currency', values: Array(12).fill(null) },
        { label: 'Forecast in Site Currency',  values: Array(12).fill(null) },
        { label: 'Other Sources',              values: Array(12).fill(null) }
      ]
    });
  }

  removeRow(id: number): void {
    this.forecastRows = this.forecastRows.filter(r => r.id !== id);
  }

  prevYear(): void { this.currentYear--; }
  nextYear(): void { this.currentYear++; }
}
