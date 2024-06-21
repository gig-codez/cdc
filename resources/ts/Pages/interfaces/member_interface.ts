export interface MemberIF {
    id: number;
    child_name: string;
    date_of_birth: string;
    address: string;
    age_group: string;
    hiv_status: string;
    village: string;
    schooling_status: string;
}

export interface EnrollmentIF {
    data: MemberIF;
}