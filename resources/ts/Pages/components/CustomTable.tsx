import React from 'react';
import $ from "jquery";

import 'datatables.net-buttons-dt/css/buttons.dataTables.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.css';

import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import 'datatables.net-responsive';

import "./datatable.css";

const CustomTable = ({ children, title, columnHeaders }: { columnHeaders: string[]; title: string; children: React.ReactNode }) => {
    React.useEffect(() => {
        $(function () {
            $(document).ready(function () {
                ($("#example1") as any).DataTable({
                    responsive: true, lengthChange: false, autoWidth: true,
                    dom: 'Bfrtip',
                    buttons: [
                        'colvis',
                        'excel',
                        'print',
                        "copy",

                    ]
                });
            });

        });

        // Cleanup function
        return () => {
            // Destroy the DataTable instance to prevent memory leaks
            ($("#example1") as any).DataTable().destroy();
        };
    }, []);
    return (
        <>
            {/* /.card */}
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">{title}</h3>
                </div>

                {/* /.card-header */}
                <div className="card-body">
                    <table id="example1" className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                {
                                    columnHeaders.map((header: string, index: number) => (
                                        <th key={index}>{header}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        {children}
                        {/* table footer */}
                        <tfoot>
                            <tr>
                                {
                                    columnHeaders.map((header: string, index: number) => (
                                        <th key={index}>{header}</th>
                                    ))

                                }
                            </tr>
                        </tfoot>
                    </table>
                </div>
                {/* /.card-body */}
            </div>
            {/* /.card */}
        </>
    );
};

export default CustomTable;