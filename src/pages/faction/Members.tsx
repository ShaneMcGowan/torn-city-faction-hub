import { useGetFactionMembers } from '../../api/faction/members/query';
import { useApiKey } from '../../hooks/useApiKey';

const PageFactionMembers = () => {

  const { apiKey } = useApiKey();

  const getFactionMembers = useGetFactionMembers({ apiKey });

  if (getFactionMembers.isPending) {
    return (<>Loading...</>)
  }

  if (getFactionMembers.isError) {
    return (<>Error</>)
  }

  return (
    <>
      {getFactionMembers.data.members.map(member => {
        return `${member.id}`
      })}
    </>
  )
}

export default PageFactionMembers