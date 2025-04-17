import { connectDB } from '@/lib/mongodb';
import Transaction from '@/models/transaction';

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  await Transaction.findByIdAndDelete(params.id);
  return Response.json({ success: true });
}
