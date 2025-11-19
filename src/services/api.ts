import axiosInstance from '@/lib/axios';

export const login = async (data: { email: string; password: string }) => {
  try {
    console.log('Login Request Data:', data);

    const response = await axiosInstance.post('/api/admin/login', data, {
      withCredentials: true, // ✅ Ensures cookies are sent with the request
    });

    console.log('Login Response:', response.data);

    return response.data;
  } catch (error: any) {
    console.error('Login Error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Login failed. Please check your credentials.');
  }
};

export const InviteAgency = async (data: { contact_email: string }) => {
  try {
    console.log("Invite email:", data);
    const response = await axiosInstance.post("/api/agencies/invite-agency", data);
    return response.data;
  } catch (error) {
    console.error("Error inviting agency:", error);
    throw error;
  }
};
export const AgencyLogin = async (data: { contact_email: string; choose_password: string }) => {
  try {
    console.log('Login Request Data:', data);
    const response = await axiosInstance.post('/api/agencies/login', data, {
      withCredentials: true, // ✅ Ensures cookies are sent with the request
    });
    console.log('Login Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Login Error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Login failed. Please check your credentials.');
  }
};

export const onboardingAgency = async (data : any) => {
  try {
    const response = await axiosInstance.post('/api/agencies/submit-details', data);
    return response.data;
  } catch (error) {
    console.log("Error onboarding agency:",  error);
    throw error;
  }
};

export const getAgencies = async () => {
  try {
    const response = await axiosInstance.get('/api/agencies/agencies')
    return response.data;
  } catch (error) {
    console.log("Error getting the data: ", error);
    throw error;
  }
}

export const getAgencyDataById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/agencies/agency/${id}`);
    return response.data;

  } catch(error) {
    console.log("Error in getting the data from agency ID", error);
    throw error;
  }
};

export const reviewAgency = async (id: string, formData: any) => {
  try {
    const response = await axiosInstance.post('/api/agencies/review-agency', {
      agencyId: id, // ✅ Ensure correct field name
      ...formData,
    });
    return response.data;
  } catch (error) {
    console.error("Error in updating review status:", error);
    throw error;
  }
};

export const pauseActiveStatus = async (id: string) => {
  try {
    const response = await axiosInstance.post('/api/agencies/pause-agency', {
      agencyId: id, 
    });

    return response.data.agency.status; // Returning the updated status
  } catch (error) {
    console.error("Error updating agency status:", error);
    throw error;
  }
};

export const volunteerLogin = async (data: { contact_email: string; choose_password: string }) => {
  try {
    console.log('Login Request Data:', data);

    const response = await axiosInstance.post('/api/volunteer/login', data, {
      withCredentials: true, // ✅ Ensures cookies are sent with the request
    });

    console.log('Login Response:', response.data);

    return response.data;
  } catch (error: any) {
    console.error('Login Error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Login failed. Please check your credentials.');
  }
};

export const volunteerRegister = async (data : any) => {
  try {
    const response = await axiosInstance.post('/api/volunteer/register', data);
    return response.data;
  } catch (error) {
    console.log("Error onboarding agency:",  error);
    throw error;
  }
};

export const getAllVolunteer = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/volunteer/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error in getting all volunteer:", error);
    throw error;
  }
};

export const getAllVolunteers = async () => {
  try {
    const response = await axiosInstance.get('/api/volunteer/getAllVolunteers');
    return response.data;
  } catch (error) {
    console.log("Error in getting all volunteers:", error);
    throw error;
  }
};

export const updateVolunteerDetails = async (id: string, data: any) => {
  try  {
    const response = await axiosInstance.patch(`/api/volunteer/${id}`, data);
    return response.data;
  } catch (error) {
    console.log("Error in updating the volunteer details:", error);
    throw error;
  }
};

export const getVolunteerDataById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/volunteer/${id}`);
    return response.data;
  } catch (error) {
    console.log("Get volunteer data by Id:", error);
    throw error;
  }
};

export const forgotPassword = async (email: string) => {
   try {
    const response = await axiosInstance.post('/api/auth/forgot-password', { email });
    return response.data;
   } catch (error: any) {
    console.error("Forgot Password error:", error);
    throw new Error(error.response?.data?.error || error.response?.data?.message || 'Failed to send password reset email. Please try again.');
   }
}

export const resetPassword = async (data: { token: string; newPassword: string; confirmPassword: string }) => {
  try {
    const response = await axiosInstance.post('/api/auth/reset-password', data);
    return response.data;
  } catch (error: any) {
    console.error("Reset password error:", error);
    throw new Error(error.response?.data?.error || error.response?.data?.message || 'Failed to reset password. Please try again.');
  }
};
export const getAgencyByZipCode = async (zipCode: string, radiusMiles: number) => {
  try {
    const response = await axiosInstance.get('/api/agencies/nearby', {
      params: {
        zip_code: zipCode,
        radiusMiles,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error in getting the agency by zip code:", error);
    throw error;
  }
};