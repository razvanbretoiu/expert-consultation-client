import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromUsers from './users.reducer';
import * as fromFileUpload from './file-upload.reducer';
import {DocumentsState} from '@app/documents/store';

export interface State {
  core: CoreState;
  documents: DocumentsState;
}

export interface CoreState {
  users: fromUsers.UserState;
  fileUpload: fromFileUpload.FileUploadState;
}

export const reducers: ActionReducerMap<CoreState> = {
  users: fromUsers.reducer,
  fileUpload: fromFileUpload.fileUploadReducer,
};

export const getCoreState = createFeatureSelector<CoreState>('core');

export { UserState } from './users.reducer';
export { FileUploadState } from './file-upload.reducer';
