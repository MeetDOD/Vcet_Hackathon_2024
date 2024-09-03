import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Users } from "lucide-react";

const DataCard = ({ title, description, footer }) => {
    return (
        <Card className="bg-white bg-gray-100  shadow-md rounded-lg border border-gray-200 p-5">
            <CardHeader className="p-4 border-b border-gray-200 rounded-t-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center mx-5">
                        <Users className="w-6 h-6 text-gray-600" />
                        <span className="ml-2 text-gray-800 font-semibold">{title}</span>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-gray-900">{description}</div>
                    </div>
                </div>
            </CardHeader>
        </Card>
    )
}

export default DataCard;
