import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent>
            <CardTitle>Total Revenue</CardTitle>
            <CardDescription>$45,231.89</CardDescription>
            <p className="text-sm text-muted">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Subscriptions</CardTitle>
            <CardDescription>+2350</CardDescription>
            <p className="text-sm text-muted">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Sales</CardTitle>
            <CardDescription>+12,234</CardDescription>
            <p className="text-sm text-muted">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Active Now</CardTitle>
            <CardDescription>+573</CardDescription>
            <p className="text-sm text-muted">+201 since last hour</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>Recent transactions from your store.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <p>Liam Johnson</p>
                    <p className="text-sm text-muted">liam@example.com</p>
                  </TableCell>
                  <TableCell>$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Olivia Smith</p>
                    <p className="text-sm text-muted">olivia@example.com</p>
                  </TableCell>
                  <TableCell>$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Noah Williams</p>
                    <p className="text-sm text-muted">noah@example.com</p>
                  </TableCell>
                  <TableCell>$350.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Emma Brown</p>
                    <p className="text-sm text-muted">emma@example.com</p>
                  </TableCell>
                  <TableCell>$450.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Liam Johnson</p>
                    <p className="text-sm text-muted">liam@example.com</p>
                  </TableCell>
                  <TableCell>$550.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar />
                <div>
                  <p>Olivia Martin</p>
                  <p className="text-sm text-muted">olivia.martin@email.com</p>
                </div>
                <p className="ml-auto">+$1,999.00</p>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar />
                <div>
                  <p>Jackson Lee</p>
                  <p className="text-sm text-muted">jackson.lee@email.com</p>
                </div>
                <p className="ml-auto">+$39.00</p>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar />
                <div>
                  <p>Isabella Nguyen</p>
                  <p className="text-sm text-muted">isabella.nguyen@email.com</p>
                </div>
                <p className="ml-auto">+$299.00</p>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar />
                <div>
                  <p>William Kim</p>
                  <p className="text-sm text-muted">will@email.com</p>
                </div>
                <p className="ml-auto">+$99.00</p>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar />
                <div>
                  <p>Sofia Davis</p>
                  <p className="text-sm text-muted">sofia.davis@email.com</p>
                </div>
                <p className="ml-auto">+$39.00</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;