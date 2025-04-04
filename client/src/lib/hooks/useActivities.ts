import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import agent from "../api/agent";
import { useLocation } from "react-router";

export const useActivities = (id?: string) => {
    const queryClient = useQueryClient();
    const location = useLocation();

    //GET ALL ACTIVITIES
    const { data: activities, isPending } = useQuery({ 
        queryKey: ["activities"],
        queryFn: async () => {
          const response = await agent.get<Activity[]>("/activities");
          return response.data;
        },
        enabled: !id && location.pathname === "/activities"
      });
    
    //GET AN ACTIVITY
    const {data: activity, isLoading:isLoadingActivity} = useQuery({
        queryKey: ["activities", id],
        queryFn: async () => {
            const response = await agent.get<Activity>(`/activities/${id}`)
            return response.data;
        },
        enabled: !!id
    })

    //UPDATE AN ACTIVITY
    const updateActivity = useMutation({ //usemutation because this is made only for updating data not for getting, if getting should useQuery
        mutationFn: async (activity: Activity) => {
            await agent.put("/activities", activity )},
            onSuccess: async () => {
                await queryClient.invalidateQueries({queryKey: ["activities"]});  
            }
        });
    

    //CREATE AN ACTIVITY
    const createActivity = useMutation({
        mutationFn: async (activity: Activity) => {
            const response = await agent.post("/activities", activity )
            return response.data;
        },
            onSuccess: async () => {
                await queryClient.invalidateQueries({queryKey: ["activities"]});  
            }
        });
    
    //DELETE AN ACTIVITY
    const deleteActivity = useMutation({
        mutationFn: async (id: string) => {
            await agent.delete(`/activities/${id}` )},
            onSuccess: async () => {
                await queryClient.invalidateQueries({queryKey: ["activities"]});  //this will refresh the data for activities
            }
        });
    
    return { 
        activities, 
        isPending, 
        updateActivity, 
        createActivity, 
        deleteActivity,
        activity,
        isLoadingActivity
    };
}
