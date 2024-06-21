import React from 'react';
import Layout from '../../components/layout';
import { useForm } from '@inertiajs/inertia-react';
import Swal from 'sweetalert2';

const EnrollmentPage = () => {
    const { post, processing, progress, errors, data, setData } = useForm({
        child_name: '',
        address: '',
        age_group: '',
        hiv_status: '',
        date_of_birth: '',
        village: '',
        schooling_status: ''
    });
    // function to handle enrollment
    const handleEnrollment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/cdc/enrollments/enroll', {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire(
                    {
                        title: 'Success',
                        text: 'Member enrolled successfully',
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
    return (
        <Layout>
            {/* code to implement a form for add a new member */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Add New Member</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form onSubmit={handleEnrollment}>
                            <div className="card-body">

                                {/* age group and HIV status */}
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label >Name <b className='text-danger'>*</b></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="e.g John doe"
                                            onChange={(e) => setData('child_name', e.target.value)}
                                        />
                                    </div>
                                    {/* age group => 10-15, 15-19, 19-24 */}
                                    <div className="form-group col-md-4">
                                        <label htmlFor="exampleInputPassword1">Age Group <b className='text-danger'>*</b></label>
                                        <select className="form-control"
                                            onChange={(e) => setData('age_group', e.target.value)}
                                        >
                                            <option value="">Select age group</option>
                                            <option value="10-15" >10-15</option>
                                            <option value="15-19">15-19</option>
                                            <option value="19-24">19-24</option>
                                        </select>
                                    </div>
                                    {/* HIV status => Positive, Negative */}
                                    <div className="form-group col-md-4">
                                        <label htmlFor="exampleInputPassword1">HIV Status <b className='text-danger'>*</b></label>
                                        <select className="form-control"
                                            onChange={(e) => setData('hiv_status', e.target.value)}
                                        >
                                            <option value="">Select HIV status</option>
                                            <option value="positive">Positive</option>
                                            <option value="negative">Negative</option>
                                        </select>
                                    </div>
                                </div>
                                {/* date of birth and village */}
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Date of Birth <b className='text-danger'>*</b></label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            onChange={(e) => setData('date_of_birth', e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Village <b className='text-danger'>*</b></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setData('village', e.target.value)}
                                            placeholder="e.g Kawaala, Kampala"
                                        />
                                    </div>
                                </div>
                                {/* schooling status */}
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Address <b className='text-danger'>*</b></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="e.g Kawaala, Kampala"
                                            onChange={(e) => setData('address', e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Schooling Status <b className='text-danger'>*</b></label>
                                        <select className="form-control"
                                            onChange={(e) => setData('schooling_status', e.target.value)}
                                        >
                                            <option value="">Select schooling status</option>
                                            <option>Enrolled</option>
                                            <option>Not enrolled</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* /.card-body */}
                            <div className="card-footer">
                                <button disabled={processing} type="submit" className="btn btn-primary">
                                    {processing ? 'Saving' : 'Enroll new Member'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default EnrollmentPage;