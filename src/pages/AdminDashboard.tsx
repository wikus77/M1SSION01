import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminPrizeManager from "@/components/admin/prizeManager/AdminPrizeManager";
import AdminPushNotifications from "@/components/admin/AdminPushNotifications";
import AdminEmailSender from "@/components/admin/AdminEmailSender";
import AdminAppMessages from "@/components/admin/AdminAppMessages";

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <Tabs defaultValue="prizes" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-900">
          <TabsTrigger value="prizes">🎁 Premi</TabsTrigger>
          <TabsTrigger value="notifications">📢 Push</TabsTrigger>
          <TabsTrigger value="emails">📧 Email</TabsTrigger>
          <TabsTrigger value="messages">🧠 Messaggi</TabsTrigger>
        </TabsList>
        <TabsContent value="prizes">
          <Card><CardContent><AdminPrizeManager /></CardContent></Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card><CardContent><AdminPushNotifications /></CardContent></Card>
        </TabsContent>
        <TabsContent value="emails">
          <Card><CardContent><AdminEmailSender /></CardContent></Card>
        </TabsContent>
        <TabsContent value="messages">
          <Card><CardContent><AdminAppMessages /></CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
