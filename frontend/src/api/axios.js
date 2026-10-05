import { mockProducts } from './mockData';

const useMockApi = false;
const mockSuccess = {
  success: true,
  message: 'Your inquiry has been successfully recorded locally. Thank you!',
};

/**
 * Fetches all products, optionally filtering by category.
 * The site currently runs against local mock data until backend APIs are ready.
 */
export const getProducts = async (categoryFilter = '') => {
  if (!useMockApi) {
    const { default: axios } = await import('axios');
    const response = await axios.get(`${import.meta.env.VITE_API_URL || 'https://grf-8fnl.onrender.com/api'}/products`);
    const products = response.data;
    return categoryFilter
      ? products.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase())
      : products;
  }

  return categoryFilter
    ? mockProducts.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase())
    : mockProducts;
};

/**
 * Fetches a single product by ID.
 * The site currently runs against local mock data until backend APIs are ready.
 */
export const getProductById = async (id) => {
  if (!useMockApi) {
    const { default: axios } = await import('axios');
    const response = await axios.get(`${import.meta.env.VITE_API_URL || 'https://grf-8fnl.onrender.com/api'}/products/${id}`);
    return response.data;
  }

  const product = mockProducts.find(p => p.id === Number(id) || String(p.id) === String(id));
  if (!product) {
    throw new Error('Product not found in mock database.');
  }
  return product;
};

/**
 * Submits a new lead / contact form.
 * The site currently runs against local mock data until backend APIs are ready.
 */
export const createLead = async (leadData) => {
  if (!useMockApi) {
    const { default: axios } = await import('axios');
    const mappedData = {
      name: leadData.fullName || leadData.name,
      email: leadData.email,
      phone: leadData.phone,
      whatsapp: leadData.whatsapp,
      company: leadData.companyName || leadData.company,
      designation: leadData.designation,
      productInterest: leadData.productInterest,
      capacityRequired: leadData.capacityRequired,
      material: leadData.materialPreference || leadData.material,
      message: leadData.message
    };
    const response = await axios.post(`${import.meta.env.VITE_API_URL || 'https://grf-8fnl.onrender.com/api'}/leads`, mappedData);
    return {
      success: true,
      message: response.data.message || 'Your inquiry has been submitted successfully',
      lead: response.data.lead
    };
  }

  return mockSuccess;
};

export const registerUser = async (name, email, password) => {
  const { default: axios } = await import('axios');
  const response = await axios.post(`${import.meta.env.VITE_API_URL || 'https://grf-8fnl.onrender.com/api'}/users/register`, {
    name,
    email,
    password
  });
  return response.data;
};

export const loginUser = async (email, password) => {
  const { default: axios } = await import('axios');
  const response = await axios.post(`${import.meta.env.VITE_API_URL || 'https://grf-8fnl.onrender.com/api'}/users/login`, {
    email,
    password
  });
  return response.data;
};

export const addProductReview = async (productId, reviewData, token) => {
  const { default: axios } = await import('axios');
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL || 'https://grf-8fnl.onrender.com/api'}/products/${productId}/reviews`,
    reviewData,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response.data;
};

export const deleteProductReview = async (productId, reviewId, token) => {
  const { default: axios } = await import('axios');
  const response = await axios.delete(
    `${import.meta.env.VITE_API_URL || 'https://grf-8fnl.onrender.com/api'}/products/${productId}/reviews/${reviewId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response.data;
};
