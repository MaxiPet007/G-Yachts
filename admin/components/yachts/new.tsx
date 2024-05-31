"use client"
import {BooleanLine, ClassicLine, NumberLine} from "@/components/yachts/manageLines";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ScrollShadow, useDisclosure} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {Input} from "@nextui-org/input";
import {addYacht, saveYacht} from "@/actions/yachts";
import {ModalHeader} from "@nextui-org/modal";
import {useViewContext} from "@/context/view";
import {addCharter} from "@/actions/charters";
import {addDestination} from "@/actions/destination";

const New = () => {
    const {setActive} = useViewContext();
    const [type, setType] = useState<"yacht" |  "charter" | "destination">();
    const [find, setFind] = useState<string>("");
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [e, setE] = useState<string>("");
    const [newYacht, setNewYacht] = useState<any>()
    useEffect(() => {
        const models = {
            yacht: {
                _id: "",
                LOA: 0,
                beam: 0,
                material: "",
                maxDraft: 0,
                minDraft: 0,
                brokerEmail: "",
                category: "",
                city: "",
                continent: "",
                country: "",
                cruising: false,
                crypto: false,
                model: "",
                region: "",
                rooms: 0,
                state: "",
                subcategory: "",
                tonnage: 0,
                yearModel: 0,
                name: "",
                price: 0,
                builder: "",
                yearBuilt: 0,
                featured: false,
                length: 0,
                sleeps: 0,
                photos: {featured: "", gallery: []},
                createNew: addYacht
            },
            charter: {
                _id: "",
                LOA: 0,
                beam: 0,
                brokerEmail: "",
                builder: "",
                category: "",
                city: "",
                continent: "",
                country: "",
                cruising: false,
                crypto: false,
                length: 0,
                state: "",
                material: "",
                maxDraft: 0,
                minDraft: 0,
                model: "",
                name: "",
                price: 0,
                region: "",
                rooms: 0,
                sleeps: 0,
                subcategory: "",
                tonnage: 0,
                yearBuilt: 0,
                yearModel: 0,
                featured: false,
                photos: {
                    featured: "",
                    gallery: [],
                },
                createNew: addCharter
            },
            destination: {
                destination: "",
                country: "",
                region: "",
                continent: "",
                photos: {
                    featured: "",
                    destinationPhoto: "",
                },
                description: "",
                info: {
                    bestTimeToVisit: "",
                    languages: "",
                    gettingThere: "",
                    currency: "",
                },
                coordinates: 0,
                createNew: addDestination
            },
        }
        if (!type) return;
        setNewYacht(models[type])
    }, [type]);

    if (!type) {
        return (
            <section
                className={
                    "w-full h-full flex flex-col items-center"
                }
            >
                <div className={"flex w-full h-[10vh] border-b-2 border-black/10  flex-row items-center gap-4"}>
                    <h1 className={"ml-10 mr-5"}>{`Create New`}</h1>
                </div>
                <div className={"flex w-full h-[90vh] gap-2 flex-col items-center justify-center"}>
                    <Button className={"w-[200px] h-[70px]"} variant={"bordered"}
                            onClick={() => setType("yacht")}>Yacht</Button>
                    <Button className={"w-[200px] h-[70px]"} variant={"bordered"}
                            onClick={() => setType("charter")}>Charter</Button>
                    <Button className={"w-[200px] h-[70px]"} variant={"bordered"}
                            onClick={() => setType("destination")}>Destination</Button>
                </div>
            </section>
        )
    }

    return (
        <section
            className={
                "w-full h-full flex flex-col items-center"
            }
        >
            <div className={"flex w-full h-[10vh] border-b-2 border-black/10  flex-row items-center gap-4"}>
                <h1 className={"ml-10 mr-5"}>{`New Yacht`}</h1>


                <Button className={"max-sm:mx-auto"} variant={"bordered"} onClick={() => {
                    newYacht.createNew(newYacht).then(() => {
                        setActive("dashboard")
                    }).catch((e: any) => {
                        console.log(e)
                        setE(e.message)
                        onOpen()
                    })
                }}>Create</Button>
                <Modal
                    className={"h-[30%]"}
                    size={"xl"}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalContent>
                        <ModalHeader>Missing Information</ModalHeader>
                        <ModalBody>
                            <p>{e}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>OK</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <Input variant={"bordered"} value={find}
                       className={"w-[30%] max-sm:hidden absolute right-[15%] max-sm:right-[5%]"}
                       placeholder={"Find"}
                       onValueChange={setFind}/>
            </div>
            <Input variant={"bordered"} value={find} className={"w-[80%] sm:hidden self-center mt-5"}
                   placeholder={"Find"}
                   onValueChange={setFind}/>
            <ScrollShadow className={"w-[80%] max-sm:w-[90%] my-8 h-[70%]"}>
                {newYacht&&  Object.entries(newYacht).map(([key, value], i) => {
                        if (key === "_id") return null;
                        if (!key.toLowerCase().includes(find.toLowerCase()) && find !== "") return null;

                        if (key === "info") {
                            return (
                                <div key={"info"}>
                                    {Object.entries(value).map(([key, value], i) => {
                                        return (
                                            <ClassicLine key={i} name={key} value={value}
                                                         setYacht={(e: string) => setNewYacht({
                                                             ...newYacht,
                                                             info: {...newYacht.info, [key]: e}
                                                         })}/>
                                        );
                                    })}
                                </div>
                            );
                        }
                        else if (typeof value === "object") {
                            return (
                                <div key={i}></div>
                            );
                        } else if (typeof value === "boolean") {
                            return (
                                <BooleanLine key={i} name={key} value={value}
                                             setYacht={(e: boolean) => setNewYacht({...newYacht, [key]: e})}/>
                            );
                        } else if (typeof value === "string") {
                            return (
                                <ClassicLine key={i} name={key} value={value}
                                             setYacht={(e: string) => setNewYacht({...newYacht, [key]: e})}/>
                            );
                        } else if (typeof value === "number") {
                            return (
                                <NumberLine key={i} name={key} value={value}
                                            setYacht={(e: any) => setNewYacht({...newYacht, [key]: e})}/>
                            );
                        }
                    }
                )}
            </ScrollShadow>
        </section>
    );
};
export default New;