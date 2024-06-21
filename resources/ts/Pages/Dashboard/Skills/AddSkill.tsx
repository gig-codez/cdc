import React from 'react';
import Layout from '../../components/layout';
import { useForm } from '@inertiajs/inertia-react';
import Swal from 'sweetalert2';
import { Dropdown } from 'primereact/dropdown';
const AddSkill = ({ enrollments, events }: { enrollments: any, events: any }) => {
    const { data, setData, post, errors, processing } = useForm({
        enrolment_id: 0,
        event_id: 0,
        skill_set: '',
    });

    function handleSkillData(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        // send data to server
        console.log(data);
        post("/cdc/skills-training/add-skill", {
            onSuccess: () => {
                Swal.fire(
                    {
                        title: 'Success!',
                        text: 'Skill added successfully!',
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
        <Layout headerTitle='Add SkillSet'>
            {/* form to add new attained skills as per the db */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Add Skill Set</h3>
                            </div>
                            <div className="card-body">
                                <form method='POST' onSubmit={handleSkillData}>
                                    <div className="form-group">
                                        <label >Enrolled Young girl</label>
                                        <br />
                                        <Dropdown className='col-lg-12' value={data.enrolment_id} filter options={enrollments.data} onChange={(e) => setData("enrolment_id", e.value.id)} optionLabel="child_name" placeholder="Select enrolled Child" />
                                        {errors.enrolment_id && <div className="text-danger">{errors.enrolment_id}</div>}
                                        {/* <input type="text" className="form-control" id="event_name" value={data.enrollment_id} onChange={(e) => setData("enrollment_id", e.target.value)} name="event_name" /> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Event <b className='text-danger'>*</b></label>
                                        <br />
                                        <Dropdown className='col-lg-12' value={data.event_id} filter options={events.data} onChange={(e) => setData("event_id", e.value.id)} optionLabel="event_type" placeholder="Select Event" />
                                        {/* <input type="date" className="form-control" value={data.event_id} onChange={(e) => setData("event_id", e.target.value)} id="event_date" name="event_date" /> */}
                                    </div>
                                    <div className="form-group">
                                        <label>Skill Set</label>
                                        <textarea placeholder='skill set ...' className="form-control" value={data.skill_set} onChange={(e) => setData("skill_set", e.target.value)} />
                                        {errors.skill_set && <div className="text-danger">{errors.skill_set}</div>}
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

export default AddSkill;

