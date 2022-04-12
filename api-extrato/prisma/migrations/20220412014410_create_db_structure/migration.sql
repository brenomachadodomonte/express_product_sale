-- CreateTable
CREATE TABLE "Extrato" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "valor" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
    "quantidade" INTEGER NOT NULL,
    "dataVenda" TIMESTAMP(3) NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Extrato_pkey" PRIMARY KEY ("id")
);
