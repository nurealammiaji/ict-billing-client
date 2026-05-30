import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useBills = () => {
    const axiosPublic = useAxiosPublic();

    const {
        data: bills,
        refetch: refetchBills,
        isLoading: isBillsLoading,
        isError: isBillsError,
        error: billsError,
    } = useQuery({
        queryKey: ['bills', 'read'],
        queryFn: async () => {
            const res = await axiosPublic.get('/bills/read');
            return res.data;
        },
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 15 * 60 * 1000, // 15 minutes
        onError: (error) => {
            console.error("Error fetching bills:", error);
        },
    });

    return { isBillsLoading, bills, refetchBills, isBillsError, billsError };
};

export default useBills;