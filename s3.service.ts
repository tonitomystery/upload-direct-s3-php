import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class S3Service {
  constructor() {}
  httpClient = inject(HttpClient);

  // https://docs.aws.amazon.com/sdk-for-php/v3/developer-guide/s3-presigned-post.html

  /**
   * Upload file to s3
   * @param file
   * @param formInputs
   * @param formAttributes
   */
  uploadFile(file: any, formInputs: any, formAttributes: any) {
    const method = formAttributes.method;
    const formData: FormData = new FormData();
    for (let key in formInputs) {
      formData.append(key, formInputs[key]);
    }

    formData.append("file", file);
    this.httpClient
      .request(method, formAttributes.action, {
        body: formData,
      })
      .subscribe({
        next: (res: any) => {
          // code here
        },
      });
  }
}
