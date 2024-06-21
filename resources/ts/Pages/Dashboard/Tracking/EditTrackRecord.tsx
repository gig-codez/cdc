import React from 'react';
import Layout from '../../components/layout';
import { useForm } from '@inertiajs/inertia-react';
import { Dropdown } from 'primereact/dropdown';
import Swal from 'sweetalert2';

const EditTrackRecord = ({ progress, enrollments, events }: { progress: any; enrollments: any; events: any }) => {
    const { data, setData, put, errors, processing } = useForm({
        enrollment_id: progress.enrollment_id,
        event_id: progress.event_id,
        lessons_attended: progress.lessons_attended,
        skills_attained: progress.skills_attained,
        can_finish_without_hiv: progress.can_finish_without_hiv === 1 ? true : false,
        can_stand_alone: progress.can_stand_alone === 1 ? true : false,
    });
    function handleTrackingData(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        // send data to server
        put("/cdc/progress-tracking/update/" + progress.id, {
            onSuccess: () => {
                Swal.fire(
                    {
                        title: 'Success!',
                        text: `Record updated successfully!`,
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
    }

    return (
        <Layout headerTitle='Edit Tracking'>
            {/* add form for tracking */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Add Event</h3>
                            </div>
                            <div className="card-body">
                                <form method='POST' onSubmit={handleTrackingData}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label >Enrolled Young girl</label>
                                            <br />
                                            <Dropdown className='col-lg-12' value={data.enrollment_id} filter options={enrollments.data} onChange={(e) => setData("enrollment_id", e.value.id)} optionLabel="child_name" placeholder="Select enrolled Child" />
                                            {errors.enrollment_id && <div className="text-danger">{errors.enrollment_id}</div>}
                                            {/* <input type="text" className="form-control" id="event_name" value={data.enrollment_id} onChange={(e) => setData("enrollment_id", e.target.value)} name="event_name" /> */}
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Event <b className='text-danger'>*</b></label>
                                            <br />
                                            <Dropdown className='col-lg-12' value={data.event_id} filter options={events.data} onChange={(e) => setData("event_id", e.value.id)} optionLabel="event_type" placeholder="Select Event" />
                                            {/* <input type="date" className="form-control" value={data.event_id} onChange={(e) => setData("event_id", e.target.value)} id="event_date" name="event_date" /> */}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Lessons Attended</label>
                                            <input type='number' placeholder='skills here' className="form-control" value={data.lessons_attended} onChange={(e) => setData("lessons_attended", parseInt(e.target.value))} />
                                            {/* {errors.skill_set && <div className="text-danger">{errors.skill_set}</div>} */}
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Skills Attained</label>
                                            <input type='text' placeholder='skills here' className="form-control" value={data.skills_attained} onChange={(e) => setData("skills_attained", e.target.value)} />
                                            {/* {errors.skill_set && <div className="text-danger">{errors.skill_set}</div>} */}
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Can Finish Without HIV</label>
                                            <input type='checkbox' className="form-control" checked={data.can_finish_without_hiv} onChange={(e) => setData("can_finish_without_hiv", e.target.checked)} />
                                            {/* {errors.skill_set && <div className="text-danger">{errors.skill_set}</div>} */}
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Can Stand Alone</label>
                                            <input type='checkbox' className="form-control" checked={data.can_stand_alone} onChange={(e) => setData("can_stand_alone", e.target.checked)} />
                                            {/* {errors.skill_set && <div className="text-danger">{errors.skill_set}</div>} */}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" disabled={processing} className="btn btn-primary">{processing ? 'Saving...' : 'Add Skill'}</button>
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

export default EditTrackRecord;