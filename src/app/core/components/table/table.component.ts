import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {MatLegacyPaginator as MatPaginator} from "@angular/material/legacy-paginator";
import {MatSort} from "@angular/material/sort";
import {MatLegacyTableDataSource as MatTableDataSource} from "@angular/material/legacy-table";
import {TableConfig} from "./table-config.type";
import {Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  public displayedColumns: string[];
  public dataSource: any;
  public pageSize: number;
  public pageIndex: number;
  public length: number;
  public config: TableConfig;
  public minWidth?: string = "700px";

  constructor(private _router: Router) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() isLoading: boolean;

  @Input()
  set tableConfig(tableConfig: TableConfig) {
    this.config = tableConfig;
    this._initTable();
  }

  ngOnInit(): void {
    this._initTable();
  }

  changePagination(event: PageEvent) {
    this._router.navigate([], {
      queryParams: {
        page: event.pageIndex + 1,
        "page-size": event.pageSize,
      },
      queryParamsHandling: "merge",
    });
  }

  private _initTable() {
    if (this.config) {
      this.displayedColumns = this.config.displayedColumns;
      this.dataSource = new MatTableDataSource<any>(
        this.config.dataSource || []
      );
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.pageSize = this.config.pageSize;
      this.pageIndex = this.config.pageIndex;
      this.minWidth = this.config.minWidth;
      this.length = this.config.count;
    }
  }
}
