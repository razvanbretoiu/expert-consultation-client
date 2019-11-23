import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Page} from '@app/core';
import {IDocumentConsolidate} from '@app/documents/models/document-consolidate.model';
import {environment} from '@env/environment';

@Injectable()
export class DocumentsApiService {

  constructor(private http: HttpClient) { }

  private get url() {
    return `${environment.api_url}/users`;
  }

  public list(): Observable<Page<IDocumentConsolidate>> {
    return this.http.get<Page<IDocumentConsolidate>>(this.url);
  }

  public get(documentId: string): Observable<IDocumentConsolidate> {
    return this.http.get<IDocumentConsolidate>(`${this.url}/${documentId}`);
  }
}
