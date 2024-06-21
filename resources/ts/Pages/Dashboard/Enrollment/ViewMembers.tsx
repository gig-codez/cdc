import React from 'react';
import Layout from '../../components/layout';
import $ from "jquery";
// import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net-buttons-dt/css/buttons.dataTables.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.css';

import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import 'datatables.net-responsive';

import "./datatable.css";
import { useForm } from '@inertiajs/inertia-react';
import Swal from 'sweetalert2';
import { MemberIF } from '../../interfaces/member_interface';

const ViewMembers = ({ data }: { data: any }) => {
    const form = useForm({});

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
        console.log(data.data);
        // Cleanup function
        return () => {
            // Destroy the DataTable instance to prevent memory leaks
            ($("#example1") as any).DataTable().destroy();
        };
    }, []);
    // function to handle delete
    const handleDelete = (id: number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this record!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                form.delete(`/cdc/enrollments/delete/${id}`, {
                    preserveScroll: true,
                    onSuccess: () => {
                        Swal.fire(
                            {
                                title: 'Success',
                                text: 'Member deleted successfully',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            }
                        )
                    },
                    onError: (errors) => {
                        Swal.fire(
                            {
                                title: 'Error',
                                text: `${errors.message}`,
                                icon: 'error',
                                confirmButtonText: 'Ok'
                            }
                        )
                    }
                });
            }
        })
    }

    return (
        <Layout>
            <>

                {/* /.card */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Enrollment data</h3>
                    </div>

                    {/* /.card-header */}
                    <div className="card-body">
                        <table id="example1" className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>
                                        Name
                                    </th>
                                    <th>Address</th>
                                    <th>Age Group</th>
                                    <th>HIV Status</th>
                                    <th>Village</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            {data && (<tbody>
                                {data.data.map((member: MemberIF, index: number) => (
                                    <tr key={index}>
                                        <td>{member.child_name}</td>
                                        <td>{member.address}</td>
                                        <td>{member.age_group}</td>
                                        <td>{member.hiv_status}</td>
                                        <td>{member.village}</td>
                                        <td>
                                            <a href={`/cdc/enrollments/${member.id}/edit`} className="btn btn-primary">Edit</a>
                                            <a href="#" onClick={() => handleDelete(member.id)} className="btn btn-danger">Delete</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>)}

                        </table>
                    </div>
                    {/* /.card-body */}
                </div>
                {/* /.card */}
            </>

        </Layout>
    );
};

export default ViewMembers;