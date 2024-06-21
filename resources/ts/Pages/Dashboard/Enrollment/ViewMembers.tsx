import React from 'react';
import Layout from '../../components/layout';

import { useForm } from '@inertiajs/inertia-react';
import Swal from 'sweetalert2';
import { MemberIF } from '../../interfaces/member_interface';
import CustomTable from '../../components/CustomTable';

const ViewMembers = ({ data }: { data: any }) => {
    const form = useForm({});
    const headers = ['Name', 'Address', 'Age Group', 'HIV Status', 'Village', 'Actions'];
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
        <Layout headerTitle='Enrollments'>
            <>

                {/* /.card */}
                <CustomTable title='Enrollment data' columnHeaders={headers}>
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
                </CustomTable>
                {/* /.card */}
            </>

        </Layout>
    );
};

export default ViewMembers;