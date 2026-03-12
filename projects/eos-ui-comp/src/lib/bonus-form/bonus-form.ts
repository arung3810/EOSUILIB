import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type BonusFrequency = 'monthly' | 'quarterly' | 'biannually' | 'annually';
export type YearType = 'financial' | 'calendar';

@Component({
  selector: 'lib-bonus-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bonus-form.html',
  styleUrls: ['./bonus-form.css']
})
export class BonusFormComponent {
  frequency: BonusFrequency = 'monthly';
  yearType: YearType = 'financial';
  
  // Monthly
  monthlyAmount = '';
  
  // Quarterly
  q1Amount = '';
  q2Amount = '';
  q3Amount = '';
  q4Amount = '';
  
  // Biannually
  month1 = '';
  amount1 = '';
  month2 = '';
  amount2 = '';
  
  // Annually
  annualMonth = '';
  annualAmount = '';

  months = [
    { value: 'january', label: 'January' },
    { value: 'february', label: 'February' },
    { value: 'march', label: 'March' },
    { value: 'april', label: 'April' },
    { value: 'may', label: 'May' },
    { value: 'june', label: 'June' },
    { value: 'july', label: 'July' },
    { value: 'august', label: 'August' },
    { value: 'september', label: 'September' },
    { value: 'october', label: 'October' },
    { value: 'november', label: 'November' },
    { value: 'december', label: 'December' }
  ];

  onFrequencyChange(): void {
    // Reset all fields when frequency changes
    this.resetFields();
  }

  onYearTypeChange(): void {
    // Reset quarterly amounts when year type changes
    this.q1Amount = '';
    this.q2Amount = '';
    this.q3Amount = '';
    this.q4Amount = '';
  }

  private resetFields(): void {
    this.monthlyAmount = '';
    this.q1Amount = '';
    this.q2Amount = '';
    this.q3Amount = '';
    this.q4Amount = '';
    this.month1 = '';
    this.amount1 = '';
    this.month2 = '';
    this.amount2 = '';
    this.annualMonth = '';
    this.annualAmount = '';
  }

  onSubmit(): void {
    const formData = {
      frequency: this.frequency,
      ...(this.frequency === 'monthly' && { amount: this.monthlyAmount }),
      ...(this.frequency === 'quarterly' && {
        yearType: this.yearType,
        q1: this.q1Amount,
        q2: this.q2Amount,
        q3: this.q3Amount,
        q4: this.q4Amount
      }),
      ...(this.frequency === 'biannually' && {
        month1: this.month1,
        amount1: this.amount1,
        month2: this.month2,
        amount2: this.amount2
      }),
      ...(this.frequency === 'annually' && {
        month: this.annualMonth,
        amount: this.annualAmount
      })
    };
    console.log('Bonus Form Data:', formData);
  }
}
