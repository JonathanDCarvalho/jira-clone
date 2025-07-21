import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

interface UseGetMembersPropos {
	workspaceId: string;
}

export const useGetMembers = ({
	workspaceId,
}: UseGetMembersPropos) => {
	const query = useQuery({
		queryKey: ["members", workspaceId],
		queryFn: async () => {
			const response = await client.api.members.$get({ query: { workspaceId } });

			if (!response.ok) {
				throw new Error("Failded to fetch members");
			}

			const { documents } = await response.json();

			return documents;
		},
	});

	return query;
};
