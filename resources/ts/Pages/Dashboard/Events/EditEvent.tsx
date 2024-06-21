import React from 'react';
import Layout from '../../components/layout';
import { useForm } from '@inertiajs/inertia-react';
import Swal from 'sweetalert2';
import { EventIF } from '../../interfaces/events_interface';

const EditEvent = ({ event }: { event: EventIF }) => {
    const { processing, data, put, setData, errors } = useForm({
        event_type: event.data.event_type,
        learning_outcomes: event.data.learning_outcomes,
        start_date: event.data.start_date,
        end_date: event.data.end_date,
    })
    // method to handle event data
    const handleEventData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(errors);
        // send data to the server
        put("/cdc/events/update/" + event.data.id, {
            preserveScroll: true,
            onSuccess: (results: any) => {
                Swal.fire(
                    {
                        title: 'Success',
                        text: results.message,
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }
                )
            },
            onError: (error: any) => {
                Swal.fire(
                    {
                        title: 'Error',
                        text: error.message,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    }
                )
            }
        })
    }
    return (
        <Layout>
            {/* form to add event */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Add Event</h3>
                            </div>
                            <div className="card-body">
                                <form method='POST' onSubmit={handleEventData}>
                                    <div className="form-group">
                                        <label htmlFor="event_name">Event type</label>
                                        <input type="text" className="form-control" id="event_name" value={data.event_type} onChange={(e) => setData('event_type', e.target.value)} name="event_name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="event_date">Event start date <b className='text-danger'>*</b></label>
                                        <input type="date" className="form-control" value={data.start_date} onChange={(e) => setData('start_date', e.target.value)} id="event_date" name="event_date" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="event_time">Event end date</label>
                                        <input type="date" className="form-control" value={data.end_date} onChange={(e) => setData('end_date', e.target.value)} id="event_time" name="event_time" />
                                        {errors.start_date && <div className="text-danger">{errors.start_date}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="event_location">Learning Outcomes</label>
                                        <textarea className="form-control" id="event_location" value={data.learning_outcomes} onChange={(e) => setData('learning_outcomes', e.target.value)} name="event_location" />
                                        {errors.learning_outcomes && <div className="text-danger">{errors.learning_outcomes}</div>}
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" disabled={processing} className="btn btn-primary">{processing ? 'Saving...' : 'Add Event'}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default EditEvent;