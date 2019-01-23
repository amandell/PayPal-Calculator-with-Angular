import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HistoryFormat } from './models/history.interface';

const HISTORY_API: string = '/api/history';

@Injectable()
export class HistoryDashboardService {
    constructor(private http: Http) {
        console.log('Http',this.http)
    }

    getHistory(): Observable<HistoryFormat[]> {
        return this.http
        .get(HISTORY_API)
        .map((response: Response) => response.json());
    }

    postHistory(history: HistoryFormat): Observable<HistoryFormat> {
        return this.http
        .post(HISTORY_API, history)
        .map((response: Response) => {
            return response.json();
        });
    }

    clearHistory() {
        
    }
}