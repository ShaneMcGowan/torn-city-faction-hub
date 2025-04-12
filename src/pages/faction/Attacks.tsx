import { useGetFactionAttacksFull } from '../../api/faction/attacksfull/query';
import { useGetFactionMembers } from '../../api/faction/members/query';
import { useApiKey } from '../../hooks/useApiKey';
import { FactionMember } from '../../model/faction/faction-member.model';

const PageFactionAttacks = () => {

  const { apiKey } = useApiKey();

  const getFactionMembers = useGetFactionMembers({ apiKey });
  const getFactionAttacksFull = useGetFactionAttacksFull({ apiKey });

  if (getFactionMembers.isPending || getFactionAttacksFull.isPending) {
    return (<>Loading...</>)
  }

  if (getFactionMembers.isError) {
    return (<>{getFactionMembers.error.message}</>)
  }

  if (getFactionAttacksFull.isError) {
    return (<>{getFactionAttacksFull.error.message}</>)
  }

  const membersMap: Map<number, FactionMember> = new Map();
  getFactionMembers.data.members.forEach(member => {
    membersMap.set(member.id, member);
  });

  console.log(getFactionAttacksFull.data);
  // const memberRespectMap: Map<number, number> = new Map();
  // getFactionAttacksFull.data.attacks.forEach(attack => {
  //   // attack.
  // });

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

export default PageFactionAttacks