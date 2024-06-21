import React from 'react';
import Layout from '../components/layout';
import { Link } from '@inertiajs/inertia-react';

interface Props {
    user: any;
    enrollments: any;
    events: any;
    progressTracking: any;
    educationalMaterial: any;
    skillsTraining: any;
}

const Index: React.FC<Props> = ({ user, enrollments, events, progressTracking, educationalMaterial, skillsTraining }) => {
    return (
        <Layout headerTitle='Dashboard'>
            <div className="row">
                <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-info">
                        <div className="inner">
                            <h3>{enrollments.data.length}</h3>
                            <p>Enrolled Young Girls</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-person" />
                        </div>
                        <a href="/cdc/enrollments/viewAll" className="small-box-footer">
                            More info <i className="fas fa-arrow-circle-right" />
                        </a>
                    </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-success">
                        <div className="inner">
                            <h3>
                                {events.data.length}
                            </h3>
                            <p>Events Recorded</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-stats-bars" />
                        </div>
                        <Link href="/cdc/events/all" className="small-box-footer">
                            More info <i className="fas fa-arrow-circle-right" />
                        </Link>
                    </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-warning">
                        <div className="inner">
                            <h3>{progressTracking.data.length}</h3>
                            <p>Progress Trackings</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-person-add" />
                        </div>
                        <Link href="/cdc/progress-tracking/view-records" className="small-box-footer">
                            More info <i className="fas fa-arrow-circle-right" />
                        </Link>
                    </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-danger">
                        <div className="inner">
                            <h3>{skillsTraining.data.length}</h3>
                            <p>Skill Sets Recorded</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-pie-graph" />
                        </div>
                        <Link href="/cdc/skills-training/view-skills" className="small-box-footer">
                            More info <i className="fas fa-arrow-circle-right" />
                        </Link>
                    </div>
                </div>
                {/* ./col */}
            </div>

        </Layout>
    );
};

export default Index;