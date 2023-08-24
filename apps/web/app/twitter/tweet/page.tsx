import { Tweet } from 'react-tweet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
  const sections = [
    {
      name: 'Community',
      tweetsIds: [
        '1045721110808014848',
        '1243914902877507584',
        '1526170638641143809',
        '1479060178419032071',
        '1491117651724480512',
        '1405899416125517827',
      ],
    },
    {
      name: 'Product',
      tweetsIds: [
        '1479060178419032071',
        '1491117651724480512',
        '1405899416125517827',
      ],
    },
    {
      name: 'Highlights',
      tweetsIds: [
        '1045721110808014848',
        '1243914902877507584',
        '1526170638641143809',
      ],
    },
  ];
  return (
    <div className="max-w-[900px] mx-auto h-screen pt-4">
      <Tabs className="w-[900px]" defaultValue={sections[0].name}>
        <TabsList className="grid w-full grid-cols-3">
          {sections.map((section, index) => (
            <TabsTrigger value={section.name} key={index} className="mr-4">
              {section.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {sections.map((section, index) => (
          <TabsContent value={section.name} key={index} className="columns-3 gap-4 pt-2">
            {section.tweetsIds.map((tweetId, idx) => (
              <div key={idx} className="break-inside mb-4">
                <Tweet id={tweetId} />
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}