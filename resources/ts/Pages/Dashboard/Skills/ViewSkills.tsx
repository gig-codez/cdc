import React from 'react';
import Layout from '../../components/layout';
import CustomTable from '../../components/CustomTable';
import { Link, useForm } from '@inertiajs/inertia-react';
import Swal from 'sweetalert2';

const ViewSkills = ({ skills }: { skills: any }) => {
    const form = useForm({
    });
    function handleDeleteSkill(id: number) {
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
                form.delete(`/cdc/skills-training/delete/${id}`, {
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
        <Layout headerTitle='View SkillSets'>
            <CustomTable title='Skills Young Girls have Attained From training' columnHeaders={["ID", "Enrolled Girl", "Event Attended", "Skill Attained", "Actions"]}>
                {
                    skills && (
                        <tbody>
                            {
                                skills.data.map((skill: any, index: number) => (
                                    <tr key={index}>
                                        <td>{skill.id}</td>
                                        <td>{skill.enrolment_id}</td>
                                        <td>{skill.event_id}</td>
                                        <td>{skill.skill_set}</td>

                                        <td>
                                            <div className="btn-group">
                                                <Link href={`/cdc/skills-training/${skill.id}/edit`} className="btn btn-primary">Edit</Link>
                                                <button onClick={() => handleDeleteSkill(skill.id)} className="btn btn-danger">Delete</button>
                                            </div>
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

export default ViewSkills;