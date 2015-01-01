import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnDestroy {
  file: File | null = null;
  progress = 0;
  private uploadInterval: any;

  onFileSelected(event: any): void {
    // Reset progress when a new file is selected
    this.progress = 0;

    const inputElement = event.target;
    if (inputElement.files.length > 0) {
      this.file = inputElement.files[0];
      this.simulateFileUpload();
    }
  }

  private simulateFileUpload(): void {
    // Clear any existing interval
    this.clearUploadInterval();

    // Simulate a slow fill for the progress bar
    this.uploadInterval = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        this.clearUploadInterval();
      }
    }, 300);
  }

  private clearUploadInterval(): void {
    clearInterval(this.uploadInterval);
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    this.clearUploadInterval();
  }
}
