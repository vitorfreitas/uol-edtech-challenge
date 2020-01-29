import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { Title } from 'styles/typography'
import { COLORS } from 'styles/variables'
import Button from 'components/Button'
import Input from 'components/Input'
import { contents } from 'mocks/data.json'
import Dropdown from 'components/Dropdown'
import Dialog from 'components/Dialog'

const Container = styled.section`
  padding: 4rem 2rem;
`

const Heading = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Actions = styled.div`
  display: flex;

  & > *:not(:last-of-type) {
    margin-right: 1rem;
  }
`

const HeadingText = styled.h1(() => Title)

const Table = styled.table`
  min-width: 60rem;
  margin-top: 2.5rem;
  overflow: auto;
`

const TableData = styled.td<{ align?: string; divider?: number }>(
  ({ divider = 5, align }) => css`
    color: #999;
    padding: 2rem 0;
    font-size: 1.4rem;
    width: calc(100% / ${divider});
    text-align: ${align || 'left'};
    border-bottom: 1px solid #eee;
  `
)

const TableHeading = styled(TableData)`
  font-weight: 500;
  font-size: 1.4rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #eee;
  color: ${COLORS.primaryLight};
`

interface Course {
  company: string
  Id: number
  Status: string
  Name: string
  Quantity: string
  Description: string
}

const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  const sortByName = (a: Course, b: Course) => a.company.localeCompare(b.company)

  const coursesList: Course[] = contents
    .reduce(
      (acc, content) => [
        ...acc,
        ...(content.Courses.map(course => ({
          company: content.Company,
          ...course
        })) as never[])
      ],
      []
    )
    .filter((course: Course) => course.Status === 'Active')
    .sort(sortByName)

  const dropdownOptions = [
    { label: 'Empresa' },
    { label: 'Maior qtd. de alunos' },
    { label: 'Menor qtd. de alunos' },
    { label: 'Mais recentes' },
    { label: 'Mais antigos' }
  ]

  return (
    <>
      <Container>
        <Heading>
          <HeadingText>Painel de cursos</HeadingText>

          <Actions>
            <Dropdown title='Ordernar por...' options={dropdownOptions} />
            <Input placeholder='Pesquisar cursos ou empresas' />
          </Actions>
        </Heading>

        <Table cellSpacing={0}>
          <thead>
            <tr>
              <TableHeading divider={8}>Empresa</TableHeading>
              <TableHeading>Nome do curso</TableHeading>
              <TableHeading divider={4}>Descrição</TableHeading>
              <TableHeading align='center'>Num. de alunos</TableHeading>
              <TableHeading align='right'>Edição e conteúdo</TableHeading>
            </tr>
          </thead>
          <tbody>
            {coursesList.map(course => (
              <tr>
                <TableData divider={8}>{course.company}</TableData>
                <TableData>{course.Name}</TableData>
                <TableData>{course.Description}</TableData>
                <TableData align='center'>{course.Quantity}</TableData>
                <TableData align='right'>
                  <Button onClick={() => setSelectedCourse(course)}>
                    Ver descrição
                  </Button>
                </TableData>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Dialog
        open={!!selectedCourse}
        content={selectedCourse?.Description ?? ''}
        onClose={() => setSelectedCourse(null)}
      />
    </>
  )
}

export { Courses }
