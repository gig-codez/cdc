import React from 'react';
import Layout from '../../components/layout';
import Swal from 'sweetalert2';
import { useForm } from '@inertiajs/inertia-react';
import { EnrollmentIF } from '../../interfaces/member_interface';

const EditMember = ({ member }: { member: EnrollmentIF }) => {

    const { put, processing, progress, errors, data, setData } = useForm({
        child_name: member.data.child_name,
        address: member.data.address,
        age_group: member.data.age_group,
        hiv_status: member.data.hiv_status,
        date_of_birth: member.data.date_of_birth,
        village: member.data.village,
        schooling_status: member.data.schooling_status
    });

    const handleEnrollmentUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        put('/cdc/enrollments/update/' + member.data.id, {
            preserveScroll: true,
            onSuccess: () => {
                Swal.fire(
                    {
                        title: 'Success',
                        text: `${member.data.child_name} updated successfully`,
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }
                )
            },
            onError: (errors: any) => {
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
        <Layout headerTitle='Edit Member'>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Edit </h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form onSubmit={handleEnrollmentUpdate}>
                            <div className="card-body">
                                {/* age group and HIV status */}
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label>Name <b className='text-danger'>*</b></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={data.child_name}
                                            placeholder="e.g John doe"
                                            onChange={(e) => setData('child_name', e.target.value)}
                                        />
                                        {errors.child_name && <div className="text-danger">{errors.child_name}</div>}
                                    </div>
                                    {/* age group => 10-15, 15-19, 19-24 */}
                                    <div className="form-group col-md-4">
                                        <label htmlFor="exampleInputPassword1">Age Group <b className='text-danger'>*</b></label>
                                        <select className="form-control"
                                            value={data.age_group}
                                            onChange={(e) => setData('age_group', e.target.value)}
                                        >
                                            <option value="">Select age group</option>
                                            <option value="10-15" >10-15</option>
                                            <option value="15-19">15-19</option>
                                            <option value="19-24">19-24</option>
                                        </select>
                                        {errors.age_group && <div className="text-danger">{errors.age_group}</div>}
                                    </div>
                                    {/* HIV status => Positive, Negative */}
                                    <div className="form-group col-md-4">
                                        <label htmlFor="exampleInputPassword1">HIV Status <b className='text-danger'>*</b></label>
                                        <select className="form-control"
                                            value={data.hiv_status}
                                            onChange={(e) => setData('hiv_status', e.target.value)}
                                        >
                                            <option value="">Select HIV status</option>
                                            <option value="positive">Positive</option>
                                            <option value="negative">Negative</option>
                                        </select>

                                        {errors.hiv_status && <div className="text-danger">{errors.hiv_status}</div>}
                                    </div>
                                </div>
                                {/* date of birth and village */}
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Date of Birth <b className='text-danger'>*</b></label>
                                        <input
                                            type="date"
                                            value={data.date_of_birth}
                                            className="form-control"
                                            onChange={(e) => setData('date_of_birth', e.target.value)}
                                        />
                                        {errors.date_of_birth && <div className="text-danger">{errors.date_of_birth}</div>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Village <b className='text-danger'>*</b></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={data.village}
                                            onChange={(e) => setData('village', e.target.value)}
                                            placeholder="e.g Kawaala, Kampala"
                                        />
                                        {errors.village && <div className="text-danger">{errors.village}</div>}
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
                                            value={data.address}
                                            placeholder="e.g Kawaala, Kampala"
                                            onChange={(e) => setData('address', e.target.value)}
                                        />
                                        {errors.address && <div className="text-danger">{errors.address}</div>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Schooling Status <b className='text-danger'>*</b></label>
                                        <select className="form-control"
                                            value={data.schooling_status}
                                            onChange={(e) => setData('schooling_status', e.target.value)}
                                        >
                                            <option value="">Select schooling status</option>
                                            <option>Enrolled</option>
                                            <option>Not enrolled</option>
                                        </select>
                                        {errors.schooling_status && <div className="text-danger">{errors.schooling_status}</div>}
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

export default EditMember;
