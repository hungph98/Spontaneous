"use client"

import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import {useState} from "react";
import HomeDecor from "@/components/home/product/HomeDecor";
import All from "@/components/home/product/All";

const HomeContent = () => {
    const [selectedTab, setSelectedTab] = useState<string | number>("all")

    return (
        <div className={'flex w-full flex-col'}>
            <Tabs aria-label="Options"
                  selectedKey={selectedTab}
                  onSelectionChange={(key) => setSelectedTab(key)}
            >
                <Tab key="all"
                     title={
                         <span
                             className={'text-xl w-32 h-12 border bg-red-500 text-white hover:text-black hover:bg-white flex items-center justify-center rounded-lg'}
                             style={{'transition': 'all .4s ease-in-out'}}
                         >
                            All
                        </span>}
                     className={'w-50'}>
                    <Card>
                        <CardBody className={'p-0 mt-10'}>
                            {selectedTab === 'all' && <All/>}
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="decor"
                     title={
                         <span
                             className={'text-xl w-32 h-12 border bg-red-500 text-white hover:text-black hover:bg-white flex items-center justify-center rounded-lg'}
                             style={{'transition': 'all .4s ease-in-out'}}
                         >
                            Decor
                        </span>}
                     className={'w-50 mr-10'}>
                    <Card>
                        <CardBody className={'p-0 mt-10'}>
                            {selectedTab === 'decor' && <HomeDecor/>}
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    )
}

export default HomeContent