export type TableConfig = {
  displayedColumns: string[];
  dataSource: any[];
  count: number;
  pageIndex: number;
  pageSize: number;
  cssClass?: string;
  minWidth?: string;
  actions?: Action[];
  actionsBoxCssClass?: string;
  // hasPagination?: boolean;
};

type Action = {
  label?: string;
  icon?: Icon;
  handler: (item: any) => void;
  cssClass?: string;
  if?: boolean;
  // roles?: AccessEnum[];
};

type Icon =
  | "visibility"
  | "edit"
  | "delete_forever"
  | "lock"
  | "print"
  | "travel_explore";
