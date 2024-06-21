import React from 'react';
import Layout from '../../components/layout';
import CustomTable from '../../components/CustomTable';
import { EventIF } from '../../interfaces/events_interface';
import { Link, useForm } from '@inertiajs/inertia-react';
import Swal from 'sweetalert2';

const ViewEvents = ({ events }: { events: EventIF }) => {
    const form = useForm({});
    // functon to handle delete event
    const handleDeleteEvent = (id: number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `${id} You will not be able to recover this record!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                form.delete(`/cdc/events/delete/${id}`, {
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
            <CustomTable title='Events' columnHeaders={['Event Name', 'Start Date', 'End Date', 'Actions']}>
                {
                    events && (
                        <tbody>
                            {
                                events.data.map((event, index) => (
                                    <tr key={index}>
                                        <td>{event.event_type}</td>
                                        <td>{event.start_date}</td>
                                        <td>{event.end_date}</td>
                                        <td>
                                            <Link href={`/cdc/events/${event.id}/edit`} className='btn btn-primary'>Edit</Link>
                                            <a href='#' onClick={() => handleDeleteEvent(event.id)} className='btn btn-danger'>Delete</a>
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

export default ViewEvents;