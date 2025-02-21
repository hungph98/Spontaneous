"use client"

import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import {useState} from "react";
import HomeDecor from "@/components/home/product/HomeDecor";

const HomeContent = () => {
    const [selectedTab, setSelectedTab] = useState("all")

    return (
        <div className={'flex w-full flex-col'}>
            <Tabs aria-label="Options"
                  selectedKey={selectedTab}
                  onSelectionChange={(key) => setSelectedTab(key)}
            >
                <Tab key="all" title="All" className={'w-10'}>
                    <Card>
                        <CardBody className={'p-1'}>
                            All
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="homedecor" title="Home Decor" className={'w-50 mr-10'}>
                    <Card>
                        <CardBody className={'p-1'}>
                            {selectedTab === 'homedecor' && <HomeDecor/>}
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    )
}

export default HomeContent