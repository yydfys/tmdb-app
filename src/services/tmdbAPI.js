import axios from 'axios';

// 注意：这里使用示例API密钥，你需要替换成自己的
const API_KEY = 'your_tmdb_api_key_here';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// 创建axios实例
const tmdbAPI = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US'
  }
});

// 搜索电影
export const searchMovies = async (query) => {
  try {
    const response = await tmdbAPI.get('/search/movie', {
      params: { query }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

// 获取热门电影
export const getPopularMovies = async () => {
  try {
    const response = await tmdbAPI.get('/movie/popular');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

// 获取电影详情
export const getMovieDetails = async (movieId) => {
  try {
    const response = await tmdbAPI.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

// 获取图片URL
export const getImageUrl = (path, size = 'w500') => {
  return path ? `https://image.tmdb.org/t/p/${size}${path}` : '/placeholder-movie.jpg';
};

export default tmdbAPI;
