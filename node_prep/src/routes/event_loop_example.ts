import { Router, Request, Response } from "express";
import * as fs from "fs";

const router = Router();

router.get("/eventLoop", (req: Request, res: Response) => {
  setTimeout(() => {
    console.log("Timeout callback (timers phase)");
  }, 0);

  setImmediate(() => {
    console.log("Immediate callback (check phase)");
  });

  fs.readFile("assets/example_file_system.txt", (err, data) => {
    if (err) throw err;
    const stringData = data.toString();
    console.log("File content (poll phase):", stringData);
    res.json(stringData)
  });

  console.log("start of the script");
});

export default router;