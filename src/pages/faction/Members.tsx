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
      <div className='flex flex-col'>
        <table>
          <thead>
            <th>Name</th>
            <th>Level</th>
            <th>Days in faction</th>
          </thead>
          <tbody>
            {getFactionMembers.data.members.map(member => {
              return (<tr>
                <td>
                  {member.name} [{member.id}]
                </td>
                <td>
                  {member.level}
                </td>
                <td>
                  {member.days_in_faction}
                </td>           
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PageFactionMembers