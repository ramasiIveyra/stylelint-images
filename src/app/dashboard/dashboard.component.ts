import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
    Chart.register(...registerables);
    this.createStackedBarChart();
    this.createPieChart();
    this.createCustomChart();
  }

  createStackedBarChart(): void {
    const ctx = this.getCanvasElement('stackedBarChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Category 1', 'Category 2', 'Category 3'],
        datasets: this.getBarChartDatasets()
      }
    });
  }

  createPieChart(): void {
    const ctx = this.getCanvasElement('pieChart');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: this.getPieChartDatasets()
      }
    });
  }

  createCustomChart(): void {
    const ctx = this.getCanvasElement('customChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: this.getLineChartDatasets()
      }
    });
  }

  private getCanvasElement(id: string): HTMLCanvasElement {
    return document.getElementById(id) as HTMLCanvasElement;
  }

 

private getBarChartDatasets(): any[] {
  return [
    this.getDataset('Dataset A', [15, 25, 35], 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 1)'),
    this.getDataset('Dataset B', [30, 40, 50], 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 1)')
  ];
}

private getPieChartDatasets(): any[] {
  return [{
    data: [40, 30, 30],
    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(255, 205, 86, 0.2)'],
    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 205, 86, 1)'],
    borderWidth: 1
  }];
}

private getLineChartDatasets(): any[] {
  return [
    this.getDataset('Monthly Data', [45, 55, 60, 75, 70, 65, 50], 'rgba(255, 99, 132, 1)', 'borderColorValue'),
  ];
}




  private getDataset(label: string, data: number[], backgroundColor: string, borderColor: string | string[], borderWidth?: number): any {
    return {
      label,
      data,
      backgroundColor,
      borderColor,
      borderWidth: borderWidth || 1
    };
  }

}
