import React from 'react';
import Layout from '../../components/layout';
import CustomTable from '../../components/CustomTable';
import Swal from 'sweetalert2';
import { Link, useForm } from '@inertiajs/inertia-react';

const ViewAllTrackRecords = ({ progress }: { progress: any }) => {
    const form = useForm({
    });
    function handleDeleteTrack(id: number) {
        Swal.fire(
            {
                title: 'Are you sure?',
                text: `${id}You will not be able to recover this record!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it'
            }
        ).then((result) => {
            if (result.isConfirmed) {
                form.delete(`/cdc/progress-tracking/delete/${id}`, {
                    onSuccess: () => {
                        Swal.fire(
                            {
                                title: 'Success!',
                                text: 'Skill deleted successfully!',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            }
                        )
                    },
                    onError: (error) => {
                        Swal.fire(
                            {
                                title: 'Error!',
                                text: error.message,
                                icon: 'error',
                                confirmButtonText: 'Ok'
                            }
                        )
                    }
                });

            } else {
                Swal.fire(
                    {
                        title: 'Cancelled!',
                        text: 'Your record is safe!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }
                )
            }
        })
    }
    return (
        <Layout headerTitle='All Progress Records'>
            <CustomTable title='Tracking Records' columnHeaders={["Enrolled Student", "Event Attended", "Lessons Attended", "Can finish Without HIV", "Can Stand Alone", "Action"]}>
                {
                    progress && (
                        <tbody>
                            {
                                progress.data.map((item: any) => (
                                    <tr key={item.id}>
                                        {/* <td>{item.id}</td> */}
                                        <td>{item.enrollment_id}</td>
                                        <td>{item.event_id}</td>
                                        <td>{item.lessons_attended}</td>
                                        {/* <td>{item.skills_attained}</td> */}
                                        <td>{item.can_finish_without_hiv === 1 ? (
                                            <span className='text-center text-success'>
                                                <b className='fa fa-check' />
                                            </span>
                                        ) : (
                                            <span className='text-center text-danger'>
                                                <b className='fa fa-close' />
                                            </span>
                                        )}</td> <td>{item.can_stand_alone === 1 ? (
                                            <span className='text-center text-success'>
                                                <b className='fa fa-check' />
                                            </span>
                                        ) : (
                                            <span className='text-center text-danger'>
                                                <b className='fa fa-close' />
                                            </span>
                                        )}</td>
                                        {/* <td>{item.can_stand_alone}</td> */}
                                        <td>
                                            <Link href={`/cdc/progress-tracking/${item.id}/edit`} className="btn btn-primary"><i className='fa fa-edit' /></Link>
                                            <button onClick={() => handleDeleteTrack(item.id)} className="btn btn-danger"><i className="fas fa-solid fa-trash" /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    )
                }
            </CustomTable>
        </Layout>
    );
};

export default ViewAllTrackRecords;