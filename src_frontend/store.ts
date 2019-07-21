
export interface ColumnData {
  columnName: string;
  sortKind: number;
  values: Array<string|number>;
}
export type TableData = ColumnData[]

export interface DataFetchOptions {
  sortColumn?: string
  sortKind: number
}

export interface StoreInterface {
  //async fetchData(): void
  fetchColumns(): Promise<string[]>
  fetchData(opts: DataFetchOptions): Promise<TableData>
}

export function clone(data: TableData): TableData {
  let newData = new Array(data.length).map((x, i) => ({
    columnName: data[i].columnName,
    sortKind: data[i].sortKind,
    values: data[i].values.slice(),
  }))
  return newData;
}