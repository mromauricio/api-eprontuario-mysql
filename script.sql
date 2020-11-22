CREATE DATABASE IF NOT EXISTS eprontuario;

USE eprontuario;

CREATE TABLE IF NOT EXISTS formularios (
  id_formulario INT(3),
  tipo            VARCHAR(60) NOT NULL,
  PRIMARY KEY (id_formulario)
);

CREATE TABLE IF NOT EXISTS pacientes (
  id_paciente  INT(11) AUTO_INCREMENT,
  nome         VARCHAR(255) NOT NULL,
  menor        BOOLEAN DEFAULT 0,
  responsavel  VARCHAR(255),
  cpfresp      VARCHAR(60),
  cpf          VARCHAR(60),
  cns          VARCHAR(60),
  registro     VARCHAR(60),
  nacionalidade VARCHAR(60),
  nascimento   DATE,
  genero       VARCHAR(60),
  tel          VARCHAR(60),  
  cel          VARCHAR(60),
  whatsapp     BOOLEAN DEFAULT 0,
  email        VARCHAR(255),
  endereco     VARCHAR(255),
  cep          VARCHAR(60),
  bairro       VARCHAR(60),
  uf           VARCHAR(60),
  cidade       VARCHAR(60),
  historico    TEXT,
  medicamento  TEXT,
  cirurgia     TEXT,
  trauma       TEXT,
  datalog      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  ativo        TINYINT DEFAULT 1, 
  id_formulario INT(3),
  PRIMARY KEY (`id_paciente`),
  UNIQUE KEY `cpf_unique` (`cpf`),
  UNIQUE KEY `cns_unique` (`cns`),
  UNIQUE KEY `registro_unique` (`registro`),
  FOREIGN KEY (id_formulario) REFERENCES formularios(id_formulario)
);


-- alter table pacientes add column datalog TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
CREATE TABLE IF NOT EXISTS tratamentos (
  id_tratamento INT(11) AUTO_INCREMENT,
  id_paciente INT(11) NOT NULL,
  descricao      TEXT NOT NULL,
  status         VARCHAR(60) NOT NULL,
  datalog      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id_tratamento),
  FOREIGN KEY (id_paciente) REFERENCES pacientes(id_paciente)
);

CREATE TABLE IF NOT EXISTS profissionais (
  id_profissional INT(11) AUTO_INCREMENT,
  nome            VARCHAR(255) NOT NULL,
  profissao       VARCHAR(120) NOT NULL,
  registro        VARCHAR(60)  NOT NULL,
  PRIMARY KEY (id_profissional)
);


CREATE TABLE IF NOT EXISTS atendimentos (
  id_atendimento INT(11) AUTO_INCREMENT,
  id_profissional INT(11) NOT NULL,
  id_tratamento   INT(11) NOT NULL,
  data            DATE NOT NULL,
  horario        VARCHAR(8) NOT NULL,
  duracao        INT(3) NOT NULL,
  quadrogeral    TEXT,
  queixa         TEXT,
  trajetodor     TEXT,
  intensidadedor INT(2),
  tipodor        TEXT,
  avaliacao      TEXT,
  agravante      TEXT,
  atenuante      TEXT,
  faixaetaria    VARCHAR(40),
  tratamentoanterior TEXT, 
  preenchido    VARCHAR(60) DEFAULT 'pendente',
  datalog      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  id_formulario INT(3),
  PRIMARY KEY (id_atendimento),
  FOREIGN KEY (id_profissional) REFERENCES profissionais(id_profissional),
  FOREIGN KEY (id_tratamento) REFERENCES tratamentos(id_tratamento),
  FOREIGN KEY (id_formulario) REFERENCES formularios(id_formulario)
);

