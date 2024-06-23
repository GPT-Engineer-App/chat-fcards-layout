import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Chat</h2>
          <div className="h-96 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className="mb-2 p-2 bg-gray-200 rounded-lg">
                {message}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center">
            <Input
              placeholder="Type a message..."
              className="flex-grow"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button className="ml-2" onClick={handleSendMessage}>
              Send
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Card 1</CardTitle>
              <CardDescription>Description for card 1</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Card 1 content goes here */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card 2</CardTitle>
              <CardDescription>Description for card 2</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Card 2 content goes here */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
};

export default Index;