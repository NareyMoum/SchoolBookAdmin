import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-module',
    templateUrl: './my-module.component.html',
    styleUrls: ['./my-module.component.scss']
})
export class MyModuleComponent implements OnInit {
    totalRecords: any = 0;
    skip: number = 0;
    take: number = 5;
    customers: any = [];
    constructor() { }

    ngOnInit() {
        this.initSearchData()
    }

    onPaginate(e: any) { // pagination ✔
      alert(e.rows)
        this.skip = e.first
        this.take = e.rows
        this.initSearchData()
    }

    initSearchData() {
        // TODO Call API or use service to get Data using skip and take
        this.customers = [
            {
                "ref_wlivraison": 1,
                "refbl_wlivraison": 2727,
                "refclient_wlivraison": 4,
                "codebl_wlivraison": "BL210279",
                "refsite_wlivraison": 5,
                "totoarticlediff_wlivraison": 4,
                "totpieces_wlivraison": 809,
                "notesbl_wlivraison": "",
                "etatbl_wlivraison": "CRE",
                "flag_wlivraison": "A",
                "site_wlivraison": "LALLA MIMOUNA",
                "datebl_wlivraison": "2021-03-27T00:00:00.000000Z"
            },
            {
                "ref_wlivraison": 2,
                "refbl_wlivraison": 2720,
                "refclient_wlivraison": 4,
                "codebl_wlivraison": "BL210272",
                "refsite_wlivraison": 5,
                "totoarticlediff_wlivraison": 4,
                "totpieces_wlivraison": 397,
                "notesbl_wlivraison": "",
                "etatbl_wlivraison": "VAL",
                "flag_wlivraison": "A",
                "site_wlivraison": "LALLA MIMOUNA",
                "datebl_wlivraison": "2021-03-24T00:00:00.000000Z"
            },
            {
                "ref_wlivraison": 3,
                "refbl_wlivraison": 2703,
                "refclient_wlivraison": 4,
                "codebl_wlivraison": "BL210255",
                "refsite_wlivraison": 5,
                "totoarticlediff_wlivraison": 4,
                "totpieces_wlivraison": 823,
                "notesbl_wlivraison": "",
                "etatbl_wlivraison": "VAL",
                "flag_wlivraison": "A",
                "site_wlivraison": "LALLA MIMOUNA",
                "datebl_wlivraison": "2021-03-20T00:00:00.000000Z"
            },
            {
                "ref_wlivraison": 5,
                "refbl_wlivraison": 2691,
                "refclient_wlivraison": 4,
                "codebl_wlivraison": "BL210243",
                "refsite_wlivraison": 5,
                "totoarticlediff_wlivraison": 3,
                "totpieces_wlivraison": 226,
                "notesbl_wlivraison": "",
                "etatbl_wlivraison": "VAL",
                "flag_wlivraison": "A",
                "site_wlivraison": "LALLA MIMOUNA",
                "datebl_wlivraison": "2021-03-17T00:00:00.000000Z"
            },
            {
                "ref_wlivraison": 6,
                "refbl_wlivraison": 2672,
                "refclient_wlivraison": 4,
                "codebl_wlivraison": "BL210224",
                "refsite_wlivraison": 5,
                "totoarticlediff_wlivraison": 4,
                "totpieces_wlivraison": 746,
                "notesbl_wlivraison": "",
                "etatbl_wlivraison": "VAL",
                "flag_wlivraison": "A",
                "site_wlivraison": "LALLA MIMOUNA",
                "datebl_wlivraison": "2021-03-13T00:00:00.000000Z"
            },
            {
                "ref_wlivraison": 6,
                "refbl_wlivraison": 2672,
                "refclient_wlivraison": 4,
                "codebl_wlivraison": "BL210224",
                "refsite_wlivraison": 5,
                "totoarticlediff_wlivraison": 4,
                "totpieces_wlivraison": 746,
                "notesbl_wlivraison": "",
                "etatbl_wlivraison": "VAL",
                "flag_wlivraison": "A",
                "site_wlivraison": "LALLA MIMOUNA",
                "datebl_wlivraison": "2021-03-13T00:00:00.000000Z"
            },
            {
                "ref_wlivraison": 6,
                "refbl_wlivraison": 2672,
                "refclient_wlivraison": 4,
                "codebl_wlivraison": "BL210224",
                "refsite_wlivraison": 5,
                "totoarticlediff_wlivraison": 4,
                "totpieces_wlivraison": 746,
                "notesbl_wlivraison": "",
                "etatbl_wlivraison": "VAL",
                "flag_wlivraison": "A",
                "site_wlivraison": "LALLA MIMOUNA",
                "datebl_wlivraison": "2021-03-13T00:00:00.000000Z"
            },
            {
                "ref_wlivraison": 6,
                "refbl_wlivraison": 2672,
                "refclient_wlivraison": 4,
                "codebl_wlivraison": "BL210224",
                "refsite_wlivraison": 5,
                "totoarticlediff_wlivraison": 4,
                "totpieces_wlivraison": 746,
                "notesbl_wlivraison": "",
                "etatbl_wlivraison": "VAL",
                "flag_wlivraison": "A",
                "site_wlivraison": "LALLA MIMOUNA",
                "datebl_wlivraison": "2021-03-13T00:00:00.000000Z"
            },
            {
                "ref_wlivraison": 6,
                "refbl_wlivraison": 2672,
                "refclient_wlivraison": 4,
                "codebl_wlivraison": "BL210224",
                "refsite_wlivraison": 5,
                "totoarticlediff_wlivraison": 4,
                "totpieces_wlivraison": 746,
                "notesbl_wlivraison": "",
                "etatbl_wlivraison": "VAL",
                "flag_wlivraison": "A",
                "site_wlivraison": "LALLA MIMOUNA",
                "datebl_wlivraison": "2021-03-13T00:00:00.000000Z"
            },
            {
                "ref_wlivraison": 6,
                "refbl_wlivraison": 2672,
                "refclient_wlivraison": 4,
                "codebl_wlivraison": "BL210224",
                "refsite_wlivraison": 5,
                "totoarticlediff_wlivraison": 4,
                "totpieces_wlivraison": 746,
                "notesbl_wlivraison": "",
                "etatbl_wlivraison": "VAL",
                "flag_wlivraison": "A",
                "site_wlivraison": "LALLA MIMOUNA",
                "datebl_wlivraison": "2021-03-13T00:00:00.000000Z"
            },
            {
                "ref_wlivraison": 6,
                "refbl_wlivraison": 2672,
                "refclient_wlivraison": 4,
                "codebl_wlivraison": "BL210224",
                "refsite_wlivraison": 5,
                "totoarticlediff_wlivraison": 4,
                "totpieces_wlivraison": 746,
                "notesbl_wlivraison": "",
                "etatbl_wlivraison": "VAL",
                "flag_wlivraison": "A",
                "site_wlivraison": "LALLA MIMOUNA",
                "datebl_wlivraison": "2021-03-13T00:00:00.000000Z"
            }
        ];
        this.totalRecords = 5;
    }
    deleteTarget(e) {
        // call api delete e.id
        alert(e.ref_wlivraison);
    }

    edit(e) {
        // update e
        alert(e.ref_wlivraison);
    }
}
